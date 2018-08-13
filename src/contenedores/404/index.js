import React from "react";
import { Helmet } from "react-helmet";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Top from "../../plantilla/top";
import Bot from "../../plantilla/bot";
import Backimg from "../../componentes/backimg";
import A from "../../act/img/0.jpg";
import B from "../../act/img/1.jpg";
import C from "../../act/img/2.jpg";

const Noencontrado = () => {
  return (
    <div>
      <Helmet>
        <title>No Encontrado</title>
      </Helmet>
      <CssBaseline />
      <Top style={{background: "transparent"}} titulo="La página que busca no existe"/>
      <Backimg imagenes={[B, C, A]}>
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
