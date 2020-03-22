import React, { useState } from 'react';
import Router from './router';
import { makeStyles } from "@material-ui/core/styles";

import { ThemeProvider } from "../../Contexts/Theme";
import NavTop from "../NavTop";
import NavLeft from "../NavLeft";

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: theme.spacing(8)
  },
}));

export default function Root() {
  const classes = useStyles();
  const [leftNavOpen, setLeftNavOpen] = useState(false);
  return (
    <ThemeProvider>
      <div className={classes.root}>
        <Router>
          <NavTop openNavLeft={() => setLeftNavOpen(true)} />
          <NavLeft open={leftNavOpen} setOpen={setLeftNavOpen} />
        </Router>
      </div>
    </ThemeProvider>
  );
}
