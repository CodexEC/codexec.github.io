import React, { Component } from "react";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

import plantilla from "../../plantilla/index";
import Contador from "../../componentes/contador";
import Box from "../../componentes/box";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  root: {
    textAlign: "center",
    paddingTop: theme.spacing.unit * 20,
    backgroundColor: "rgba(230, 200, 100, 0.63)",
    border: "1px dotted blue"
  }
});

class Bienvenido extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Helmet>
          <title>⚖</title>
        </Helmet>
        <Contador />
        <Box labelOff="ON" labelOn="OFF" />
        <Button component={Link} to="/programa">
          Demostración
        </Button>
        <Button color="primary" variant="contained">
          Ayuda
        </Button>
      </div>
    );
  }
}

Bienvenido.propTypes = {
  classes: PropTypes.object.isRequired
};

export default plantilla(withStyles(styles)(Bienvenido));
