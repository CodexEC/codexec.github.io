import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const estilos = {
  root: {
    flexGrow: 1
  }
};

class Top extends Component {
  render() {
    return (
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography color="inherit" variant="title">
            ⚖ {this.props.titulo}
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
Top.defaultProps = {
  titulo: "Bienvenido"
};

Top.propTypes = {
  classes: PropTypes.object.isRequired,
  titulo: PropTypes.string
};

export default withStyles(estilos)(Top);
console.log("====================================");
console.log("> TOP");
console.log("====================================");
