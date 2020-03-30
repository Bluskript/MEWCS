import React from "react";
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import { indigo, blueGrey } from "@material-ui/core/colors";
import { NavBar } from "./NavBar";

const defaultTheme = createMuiTheme({
  palette: {
    type: "dark",
    primary: indigo,
    secondary: blueGrey
  }
});

const App = () => {
  return (
    <div className="App">
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <NavBar />
      </ThemeProvider>
    </div>
  );
};

export default App;
