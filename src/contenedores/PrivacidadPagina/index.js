import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Top from "../../plantilla/top";
import Bot from "../../plantilla/bot";
import Backer from "../../componentes/backimg";
import A from "../../act/img/0.jpg";
import B from "../../act/img/1.jpg";
import C from "../../act/img/2.jpg";

const PrivacidadPagina = () => {
  return (
    <div>
      <Helmet>
        <title>Privacidad y Rastros</title>
      </Helmet>
      <CssBaseline />
      <Top style={{background: "transparent"}} titulo="Políticas de Privacidad"/>
      <Backer imagenes={[C, A, B]}>
        <Paper
          style={{
            margin: "15px 40px 40px",
            padding: "1px 20px",
            textAlign: "justify",
            backgroundColor: "#bacfb2de"
          }}
          >
          <div>
            {"FIXME: insertar privacidad"}
          </div>
        </Paper>
      </Backer>
      <Bot/>
    </div>
  );
};

export default PrivacidadPagina;
