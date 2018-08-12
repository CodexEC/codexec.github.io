import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Parallax from "../../componentes/parallax";
import Bot from "../../plantilla/bot";
import Top from "../../plantilla/top";
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import lightGreen from "@material-ui/core/colors/lightGreen";
import logo from "../../act/img/logo.png";
import lander from "../../act/img/lander.jpg";
import SearchIcon from "@material-ui/icons/Https";
import MasIcon from "@material-ui/icons/Sms";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

const styles = theme => ({
  cssRoot: {
    color: theme.palette.getContrastText(lightGreen[500]),
    backgroundColor: lightGreen[500],
    "&:hover": {
      backgroundColor: lightGreen[700]
    },
    padding: "25px"
  },
  main: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-end",
    padding: "0 1.5em"
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
        <Top position="fixed" style={{background: "black"}}/>
        <Parallax
          filter={false}
          image={lander}
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
              <Typography style={{ letterSpacing: "2px" }} variant="display3">
                CODEXEC
              </Typography>
            </div>
            <Typography
              style={{ textAlign: "justify", color: "#f8f8f8" }}
              variant="headline"
              >
              Aplicación <em>multiplataforma</em> para el control y manejo de
              los documentos <b>privados</b> de un estudio jurídico; también se
              incluye los principales <b>códigos</b> vigentes en el Ecuador.
            </Typography>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly"
              }}
              >
              <Tooltip placement="left" title="Ingreso">
                <IconButton
                  aria-label="Ingreso"
                  component={Link}
                  style={{ margin: "8px", color: "#000" }}
                  to="/programa"
                  >
                  <SearchIcon style={{ fontSize: "36px" }} />
                </IconButton>
              </Tooltip>
              <Tooltip placement="right" title="Saber Más...">
                <IconButton
                  aria-label="Saber Más..."
                  component={Link}
                  style={{ margin: "8px", color: "#000" }}
                  to="/"
                  >
                  <MasIcon style={{ fontSize: "36px" }} />
                </IconButton>
              </Tooltip>
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
