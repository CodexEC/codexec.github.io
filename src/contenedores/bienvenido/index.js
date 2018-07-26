import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";
import Box from "../../componentes/box";

class Bienvenido extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>⚖</title>
        </Helmet>
        <Plantilla />
        <h1>!Hola Mundo¡</h1>
        <Contador />
        <Box labelOff="ON" labelOn="OFF"/>
      </div>
    );
  }
}

Bienvenido.propTypes = {};

export default Bienvenido;
