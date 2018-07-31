import React from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
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
      light: blue[300],
      main: blue[500],
      dark: blue[700]
    }
  }
});

function importar(Component) {
  function conPlantilla(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Top titulo="Rodríguez & Asociados" />
        <Component {...props} />
        <Bot />
      </MuiThemeProvider>
    );
  }

  return conPlantilla;
}

export default importar;
console.log("====================================");
console.log(">>> Plantilla");
console.log("====================================");
