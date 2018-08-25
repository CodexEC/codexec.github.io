import React from "react";
import { Helmet } from "react-helmet";
import Paper from "@material-ui/core/Paper";
import Top from "../../plantilla/top";
import Bot from "../../plantilla/bot";
import Backer from "../../componentes/backimg";
import lander1 from "../../act/img/backer100.jpg";
import lander2 from "../../act/img/backer101.jpg";
import lander3 from "../../act/img/backer104.jpg";

const PrivacidadPagina = () => {
  return (
    <div>
      <Helmet>
        <title>Privacidad</title>
      </Helmet>
      <Top style={{background: "transparent"}} titulo="Políticas de Privacidad"/>
      <Backer imagenes={[lander3, lander1, lander2]}>
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
