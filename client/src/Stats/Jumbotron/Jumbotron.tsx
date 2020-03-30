import React from "react";
import { makeStyles, Typography, Paper, Grid } from "@material-ui/core";
import { ClearPaper } from "../../Component/ClearPaper";

const jumboStyles = makeStyles(theme => ({
  container: {
    background:
      "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://gitlab.gnome.org/GNOME/gnome-backgrounds/-/raw/master/backgrounds/LightWaves.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    padding: theme.spacing(6)
  },
  stats: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(2)
  }
}));

export const Jumbotron = () => {
  const classes = jumboStyles();
  return (
    <div className={classes.container}>
      <Typography variant="h2">Statistics</Typography>
      <ClearPaper width="30%">
        <Typography variant="h5">Area Completed: 0km²</Typography>
        <Typography variant="h5">Percent Complete: 0%</Typography>
        <Typography variant="h5">Contributors: 0</Typography>
      </ClearPaper>
      <ClearPaper width="30%" marginTop="16px">
        <Typography variant="h5">World Size: 0TB</Typography>
        <Typography variant="h5">Merged Worlds: 0</Typography>
        <Typography variant="h5">Monthly Visitors: 0</Typography>
      </ClearPaper>
    </div>
  );
};
