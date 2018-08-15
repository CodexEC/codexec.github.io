import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blueGrey from "@material-ui/core/colors/blueGrey";
import lightGreen from "@material-ui/core/colors/lightGreen";
import Top from "./top";
import Bot from "./bot";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightGreen[300],
      main: lightGreen[500],
      dark: lightGreen[700]
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
        <Top titulo="CodexEC" />
        <Component {...props} />
        <Bot />
      </MuiThemeProvider>
    );
  }

  return conPlantilla;
}

export default importar;
