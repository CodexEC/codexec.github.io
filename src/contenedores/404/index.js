import React from "react";
import { Helmet } from "react-helmet";
import Paper from "@material-ui/core/Paper";
import Top from "../../plantilla/top";
import Bot from "../../plantilla/bot";
import Backimg from "../../componentes/backimg";
import lander1 from "../../act/img/backer100.jpg";
import lander2 from "../../act/img/backer101.jpg";
import lander3 from "../../act/img/backer104.jpg";

const Noencontrado = () => {
  return (
    <div>
      <Helmet>
        <title>No Encontrado</title>
      </Helmet>
      <Top style={{background: "transparent"}} titulo="La página que busca no existe"/>
      <Backimg imagenes={[lander1, lander3, lander2]}>
        <Paper
          style={{
            margin: "15px 40px 40px",
            padding: "1px 20px",
            textAlign: "justify",
            backgroundColor: "rgba(87, 133, 114, 0.6)"
          }}
          >
          <div>
          <h1>404</h1>
          <hr/>
          <p>
            {"FIXME: añadir 404"}
          </p>
        </div>
        </Paper>
      </Backimg>
      <Bot/>
    </div>
  );
};

export default Noencontrado;
