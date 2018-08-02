import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import plantilla from "../../plantilla/index";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  root: {
    paddingTop: "100px",
    textAlign: "center",
    margin: "0 10px 40px 10px",
    background: "cyan",
    height: "100%",
    position: "absolute"
  },
  bie: {
    flex: "0 0 auto",
    color: "#1976d2",
    display: "flex",
    textAlign: "justify",
    minHeight: "80vh",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    margin: "0 10px 40px 10px"
  }
};

class Bienvenido extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.bie}>
        <Helmet>
          <title>⚖</title>
        </Helmet>
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="display3">
              CodexEC
            </Typography>
            <Typography
              gutterBottom
              variant="headline"
              >
              Es una aplicación multiplataforma para el control y manejo de los documentos <b>privados</b> de los clientes de nuestro estudio juridico; además se proveen los principales códigos vigentes en el Ecuador.
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
            <Button
              color="primary"
              style={{ margin: "8px" }}
              variant="contained"
              >
              Nosotros
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Bienvenido.propTypes = {
  classes: PropTypes.object.isRequired
};

export default plantilla(withStyles(styles)(Bienvenido));
