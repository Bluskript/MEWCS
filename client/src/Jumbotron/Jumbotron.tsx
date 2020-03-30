import React from "react";
import { makeStyles } from "@material-ui/core";

const jumboStyles = makeStyles({
  container: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://gitlab.gnome.org/GNOME/gnome-backgrounds/-/raw/master/backgrounds/LightWaves.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "800px"
  }
});

export const Jumbotron = () => {
  const classes = jumboStyles();
  return <div className={classes.container}></div>;
};
