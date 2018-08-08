import React from "react";
import { Helmet } from "react-helmet";
import plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";
import Tiempo from "../../componentes/tiempo";
import Backer from "../../componentes/backer";

import A from "../../act/img/0.jpg";
import B from "../../act/img/1.jpg";
import C from "../../act/img/2.jpg";

var start = new Date().getTime();


const Index = () => {
  return (
    <div>
      <Helmet>
        <title>Privacidad</title>
      </Helmet>
      <Backer imagenes={[A, B, C]}>
        <div>Privacidad</div>
        <h1>Priva:</h1>
        <Tiempo elapsed={new Date().getTime() - start} />
        <Contador />
      </Backer>
    </div>
  );
};

export default plantilla(Index);
