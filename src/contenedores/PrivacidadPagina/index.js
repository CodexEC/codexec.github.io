import React from "react";
import { Helmet } from "react-helmet";
import plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";

const index = () => {
  return (
    <div>
      <Helmet>
        <title>Privacidad</title>
      </Helmet>
      <div>Privacidad</div>
      <h1>Priva:</h1>
      <Contador />
    </div>
  );
};

export default plantilla(index);
