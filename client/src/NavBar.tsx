import React from "react";
import { AppBar, Toolbar, Typography, makeStyles } from "@material-ui/core";

const navStyles = makeStyles(() => ({
  title: {
    flexGrow: 1
  }
}));

export const NavBar = () => {
  const classes = navStyles();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          MEWCS - Minecraft Earth World Coordination System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
