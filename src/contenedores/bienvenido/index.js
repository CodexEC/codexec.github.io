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
import lightGreen from "@material-ui/core/colors/lightGreen";
import logo from "../../act/img/logo.png";

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    "&:hover": {
      backgroundColor: lightGreen[700]
    }
  },
  main: {
    display: "flex",
    height: "80vh",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end"
  }
});

class Bienvenido extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>⚖</title>
        </Helmet>
        <CssBaseline />

        <Parallax
          filter={false}
          image={require("../../act/img/lander.jpg")}
          small={false}
          style={{ color: "blue" }}
          >
          <div className={classes.main}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
              >
              <img alt="codexec" src={logo} />
              <Typography style={{letterSpacing: "2px"}} variant="display3">CODEXEC</Typography>
            </div>
            <div>
              <Typography
                style={{ textAlign: "justify", color: "#f8f8f8" }}
                variant="headline"
                >
                Aplicación <em>multiplataforma</em> para el control y manejo de
                los documentos <b>privados</b> de un estudio jurídico; también
                se incluye los principales <b>códigos</b> vigentes en el
                Ecuador.
              </Typography>
              <Button
                className={classes.cssRoot}
                component={Link}
                style={{ margin: "8px" }}
                to="/programa"
                >
                Prueba
              </Button>
              <Button className={classes.cssRoot} style={{ margin: "8px" }}>
                Saber Más
              </Button>
            </div>
          </div>
        </Parallax>
        <Bot />
      </div>
    );
  }
}

Bienvenido.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bienvenido);
