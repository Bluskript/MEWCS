import React from "react";
import {
  ThemeProvider,
  CssBaseline,
  createMuiTheme,
  makeStyles
} from "@material-ui/core";
import { indigo, blueGrey } from "@material-ui/core/colors";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import { NavBar } from "./NavBar";
import { WorldMap } from "./WorldMap/WorldMap";
import { Stats } from "./Stats/Stats";

const defaultTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: indigo,
    secondary: blueGrey
  }
});

const appStyles = makeStyles({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
});

const App = () => {
  const classes = appStyles();

  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <BrowserRouter>
          <CssBaseline />
          <div className={classes.container}>
            <NavBar />
            <Switch>
              <Route exact path="/stats">
                <Stats />
              </Route>
              <Route exact path="/:lat?/:lng?/:zoom?">
                <WorldMap />
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
};

export default App;
