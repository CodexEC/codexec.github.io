import React from "react";
import { Helmet } from "react-helmet";
import Paper from "@material-ui/core/Paper";
import Top from "../../plantilla/top";
import Bot from "../../plantilla/bot";
import Backer from "../../componentes/backimg";
import lander1 from "../../act/img/backer100.jpg";
import lander2 from "../../act/img/backer101.jpg";
import lander3 from "../../act/img/backer104.jpg";

function TerminosPagina() {
  return (
    <div>
      <Helmet>
        <title>Términos de uso</title>
      </Helmet>
      <Top style={{ background: "transparent" }} titulo="Términos de Uso" />
      <Backer imagenes={[lander2, lander3, lander1]}>
        <Paper
          style={{
            margin: "15px 40px 40px",
            padding: "1px 20px",
            textAlign: "justify",
            backgroundColor: "rgba(175, 174, 162, 0.89)"
          }}
          >
          <div>{"FIXME: insertar terminos"}</div>
        </Paper>
      </Backer>
      <Bot />
    </div>
  );
}

export default TerminosPagina;
