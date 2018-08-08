import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Parallax from "../../componentes/parallax";
import Bot from "../../plantilla/bot";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
// import classNames from "classnames";
import lightGreen from "@material-ui/core/colors/lightGreen";

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    "&:hover": {
      backgroundColor: lightGreen[700]
    }
  }
});

class Bienvenido extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Parallax filter={false} image={require("../../act/img/lander.jpg")} small={false} style={{color: "blue"}}>
      <CssBaseline />
        <Helmet>
          <title>⚖</title>
        </Helmet>
        <Typography style={{color: "#f8f8f8"}} variant="display3">
          CODEX
        </Typography>
        <Typography style={{textAlign: "justify", color: "#f8f8f8"}} variant="headline">
          Aplicación <em>multiplataforma</em> para el control y manejo de los
          documentos <b>privados</b> de un estudio
          jurídico; también se incluye los principales <b>códigos</b> vigentes en el
          Ecuador.
        </Typography>
        <Button
          className={classes.cssRoot}
          component={Link}
          style={{ margin: "8px" }}
          to="/programa"
          >
          Ingreso
        </Button>
        <Button className={classes.cssRoot} style={{ margin: "8px" }}>
          Nosotros
        </Button>
        <Bot/>
      </Parallax>
    );
  }
}

Bienvenido.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bienvenido);
