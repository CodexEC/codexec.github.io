import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Backer from "../../componentes/backimg";
import Bot from "../../plantilla/bot";
import Top from "../../plantilla/top";
import { withStyles } from "@material-ui/core/styles";
// import logo from "../../act/img/logo.png";
import lander1 from "../../act/img/backer100.jpg";
import lander2 from "../../act/img/backer101.jpg";
import lander3 from "../../act/img/backer104.jpg";
import Button from "@material-ui/core/Button";

const styles = {
  main: {
    display: "flex",
    height: "100vh",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "0 1.5em"
  }
};

class Bienvenido extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Helmet>
          <title>⚖</title>
        </Helmet>
        <Top position="fixed" style={{ background: "rgba(0, 0, 0, 0.63)" }} />
        <Backer imagenes={[lander1, lander2, lander3]}>
          <div className={classes.main}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: "column"
              }}
              >
              <Typography
                style={{
                  fontFamily: "VT323",
                  fontSize: "6em",
                  letterSpacing: "2px",
                  color: "#f8f8f8"
                }}
                variant="display3"
                >
                CODEXEC
              </Typography>
            </div>
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center"
              }}
              >
              <Button
                component={ Link }
                style={{
                  color: "#000",
                  backgroundColor: "#8bc34a",
                  borderRadius: "40px",
                  fontWeight: "600"
                }}
                to="/programa"
                variant="contained"
                >
                Prueba Codexec Gratis
              </Button>
            </div>
          </div>
        </Backer>
        <Bot />
      </div>
    );
  }
}

Bienvenido.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Bienvenido);
