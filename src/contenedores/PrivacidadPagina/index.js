import React from "react";
import { Helmet } from "react-helmet";
import plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";
import Tiempo from "../../componentes/tiempo";

var start = new Date().getTime();
console.log(start);

const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Privacidad</title>
      </Helmet>
      <div>Privacidad</div>
      <h1>Priva:</h1>
      <Tiempo elapsed={new Date().getTime() - start} />
      <Contador />
    </div>
  );
};

export default plantilla(Index);
