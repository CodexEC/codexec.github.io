import React, { Component } from "react";
import { Helmet } from "react-helmet";

import Plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";

class Noencontrado extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>CodEXEC ⚖ | Pàgina no encontrada.</title>
        </Helmet>
        <Plantilla />
        <h1>Tiempo en pantalla 404:</h1>
        <Contador />
      </div>
    );
  }
}

export default Noencontrado;
