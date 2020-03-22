import React from "react";
import { Link } from "react-router-dom";
import {
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import {
  Description as DescriptionIcon,
  Home as HomeIcon,
  Mail as MailIcon,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const iOS = process.browser && /iP(?:ad|hone|od)/.test(navigator.userAgent);

function ListItemLink({ icon, primary, to }) {

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

export default function NavLeft({ open, setOpen }) {
  const classes = useStyles();
  const toggle = opened => event => {
    setOpen(opened);
  }
  return (
    <SwipeableDrawer
      open={open}
      onOpen={toggle(true)}
      onClose={toggle(false)}
      disableBackdropTransition={!iOS}
      disableDiscovery={iOS}
    >
      <div
        className={classes.list}
        role="presentation"
        onClick={toggle(false)}
        onKeyDown={toggle(false)}
      >
        <List>
          <ListItemLink
            primary="Home"
            icon=<HomeIcon />
            to="/"
          />
          <Divider />
          <ListItemLink
            primary="Experience"
            icon=<DescriptionIcon />
            to="/about/experience"
          />
          <ListItemLink
            primary="Contact"
            icon=<MailIcon />
            to="/about/contact"
          />
        </List>
      </div>
    </SwipeableDrawer>
  )
}
