import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import plantilla from "../../plantilla/index";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Parallax from "../../componentes/parallax";

class Bienvenido extends Component {
  render() {
    return (
      <Parallax filter={false} image={require("../../act/img/lander.jpg")} small={false} style={{color: "blue"}}>
        <Helmet>
          <title>⚖</title>
        </Helmet>
        <Typography style={{color: "#f8f8f8"}} variant="display3">
          CODEX
        </Typography>
        <Typography style={{textAlign: "justify", color: "#f8f8f8"}} variant="headline">
          Aplicación <em>multiplataforma</em> para el control y manejo de los
          documentos <b>privados</b> que ingresan a nuestro estudio
          jurídico; incluye los principales <b>códigos</b> vigentes en el
          Ecuador.
        </Typography>
        <Button
          color="primary"
          component={Link}
          style={{ margin: "8px" }}
          to="/programa"
          variant="contained"
          >
          Ingreso
        </Button>
        <Button color="primary" style={{ margin: "8px" }} variant="contained">
          Nosotros
        </Button>
      </Parallax>
    );
  }
}

Bienvenido.propTypes = {
  classes: PropTypes.object.isRequired
};

export default plantilla(Bienvenido);
