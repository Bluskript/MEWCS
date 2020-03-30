import React from "react";
import { makeStyles } from "@material-ui/core";

const clearPaperStyles = makeStyles(theme => ({
  container: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    padding: theme.spacing(2)
  }
}));

export const ClearPaper = (props: {
  children: React.ReactNode;
  width?: string;
  marginTop?: string;
}) => {
  const classes = clearPaperStyles();

  return (
    <div
      className={classes.container}
      style={{ width: props.width, marginTop: props.marginTop }}
    >
      {props.children}
    </div>
  );
};
