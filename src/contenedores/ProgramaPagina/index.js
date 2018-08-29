import React from "react";
import { Helmet } from "react-helmet";
import plantilla from "../../plantilla/index";

import Programa from "../../componentes/programa";

function ProgramaPagina() {
  return (
    <div>
      <Helmet>
        <title>CodexEC</title>
      </Helmet>
      <Programa />
    </div>
  );
}

export default plantilla(ProgramaPagina);
