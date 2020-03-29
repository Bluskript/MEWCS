import React from "react";
import { ThemeProvider, CssBaseline, createMuiTheme } from "@material-ui/core";
import { indigo, blueGrey } from "@material-ui/core/colors";

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
      </ThemeProvider>
    </div>
  );
};

export default App;
