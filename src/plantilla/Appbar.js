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

class Appbarra extends Component {
  render() {
    return (
      <div>
        <AppBar color="secondary" position="static" >
          <Toolbar>
            <Typography color="inherit" variant="title">
                ⚖ {this.props.titulo}
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


Appbarra.propTypes = {
  classes: PropTypes.object.isRequired,
  titulo: PropTypes.string
};

export default withStyles(estilos)(Appbarra);

