import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../service/firebase";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import FeedbackIcon from "@mui/icons-material/Feedback";
import LoginIcon from "@mui/icons-material/Login";
import styles from "./Header.module.css";

function Header({ isLogin, onLogout }) {
  const navigate = useNavigate();
  const user = firebaseAuth.currentUser;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="fixed"
        color="default"
        sx={{
          paddingX: "5%",
          backgroundColor: "white",
          ringColor: "rgb(59 130 246/0.5)",
          boxShadow:
            "0 1px 3px 0 rgb(0 0 0/0.1),0 1px 2px -1px rgb(0 0 0/0.1);",
        }}
      >
        <Toolbar>
          <IconButton
            onClick={() => navigate({ pathname: "/" })}
            size="medium"
            edge="start"
            color="primary"
            aria-label="logo"
            sx={{ mr: 1.5 }}
          >
            <img
              className={styles.logo}
              src={process.env.PUBLIC_URL + "/logo.svg"}
              alt="logo"
            />
          </IconButton>
          <Typography
            variant="text"
            component="div"
            color="text.title"
            sx={{ flexGrow: 1 }}
          >
            한슐랭 가이드
          </Typography>
          <Tooltip title="GitHub 링크" arrow sx={{ mr: 0.5 }}>
            <IconButton
              href="https://github.com/shine-jung/hanchelin-web"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>
          <Tooltip title="피드백 남기기" arrow sx={{ mr: 0.5 }}>
            <IconButton>
              <FeedbackIcon />
            </IconButton>
          </Tooltip>
          {isLogin ? (
            <Tooltip title="로그아웃" arrow>
              <IconButton onClick={onLogout}>
                <img
                  className={styles.profile}
                  src={user.photoURL}
                  alt={user.displayName}
                />
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="로그인" arrow>
              <IconButton onClick={() => navigate({ pathname: "/login" })}>
                <LoginIcon />
              </IconButton>
            </Tooltip>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
