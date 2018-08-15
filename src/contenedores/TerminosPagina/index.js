import React from "react";
import { Helmet } from "react-helmet";
import Paper from "@material-ui/core/Paper";
import Top from "../../plantilla/top";
import Bot from "../../plantilla/bot";
import Backer from "../../componentes/backimg";
import A from "../../act/img/0.jpg";
import B from "../../act/img/1.jpg";
import C from "../../act/img/2.jpg";

function TerminosPagina() {
  return (
    <div>
      <Helmet>
        <title>Términos de uso</title>
      </Helmet>
      <Top style={{ background: "transparent" }} titulo="Términos de Uso" />
      <Backer imagenes={[A, B, C]}>
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
