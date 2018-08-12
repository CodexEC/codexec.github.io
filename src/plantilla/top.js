import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import MenuIcono from "@material-ui/icons/MoreVert";

// TODO: bindiar los right iconos busqueda y vistas

const estilos = {
  bie: {
    flex: "0 0 auto",
    display: "flex",
    textAlign: "justify",
    alignItems: "center",
    justifyContent: "space-between"
  }
};

class Top extends Component {
  render() {
    const { classes, color, position, style } = this.props;

    return (
      <AppBar color={color} position={position} style={style}>
        <Toolbar className={classes.bie}>
          <div>
            <Typography color="inherit" variant="title">
              ⚖ {this.props.titulo}
            </Typography>
          </div>
          <div>
            <Tooltip title="Ingreso">
              <IconButton aria-label="Ingreso" color="inherit">
                <MenuIcono />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
Top.defaultProps = {
  titulo: "Bienvenido",
  color: "primary",
  position: "static"
};

Top.propTypes = {
  classes: PropTypes.object.isRequired,
  titulo: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.string,
  style: PropTypes.object
};

export default withStyles(estilos)(Top);
