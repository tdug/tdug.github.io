import React, { useContext } from "react";
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import {
  Menu as MenuIcon,
  Brightness4 as DarkThemeIcon,
  Brightness5 as LightThemeIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon
} from "@material-ui/icons"
import { makeStyles } from "@material-ui/core/styles";

import { ThemeContext } from "../../Contexts/Theme";

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: 2
  },
  title: {
    flexGrow: 1
  }
});

function ThemeToggle() {
  const [theme, setTheme] = useContext(ThemeContext);

  if (theme === "base") {
    return (
      <IconButton onClick={() => setTheme(theme => "dark")}>
        <DarkThemeIcon />
      </IconButton>
    );
  } else {
    return (
      <IconButton onClick={() => setTheme(theme => "base")}>
        <LightThemeIcon />
      </IconButton>
    );
  }
}

export default function NavTop({ openNavLeft }) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            edge="start"
            color="inherit"
            aria-label="Menu"
            onClick={openNavLeft}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            className={classes.title}
          >
            tdug
          </Typography>
          <ThemeToggle />
          <IconButton
            href="https://github.com/tdug"
            target="_blank"
            renderAs={Link}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            href="https://www.linkedin.com/in/tom-dugovic/"
            target="_blank"
            renderAs={Link}
          >
            <LinkedInIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
