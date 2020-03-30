import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button
} from "@material-ui/core";
import { useHistory } from "react-router";

const navStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}));

export const NavBar = () => {
  const classes = navStyles();
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          MEWCS
        </Typography>
        <Button onClick={() => history.push("/stats")}>Stats</Button>
        <Button onClick={() => history.push("/map")}>Map</Button>
      </Toolbar>
    </AppBar>
  );
};
