import React from "react";
import { Helmet } from "react-helmet";
import plantilla from "../../plantilla/index";
// import Plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";

const Noencontrado = () => {
  return (
    <div>
      <Helmet>
        <title>No Encontrado</title>
      </Helmet>
      <div>Opps- 404 HOUSTON</div>
      <h1>Tiempo en pantalla 404:</h1>
      <Contador />
    </div>

  );
};

export default plantilla(Noencontrado);
