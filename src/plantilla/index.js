import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import teal from "@material-ui/core/colors/teal";
import CssBaseline from "@material-ui/core/CssBaseline";
import Top from "./top";
import Bot from "./bot";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: teal[300],
      main: teal[500],
      dark: teal[700]
    },
    secondary: {
      light: blueGrey[300],
      main: blueGrey[500],
      dark: blueGrey[700]
    }
  }
});

function importar(Component) {
  function conPlantilla(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Top titulo="" />
        <Component {...props} />
        <Bot />
      </MuiThemeProvider>
    );
  }

  return conPlantilla;
}

export default importar;
