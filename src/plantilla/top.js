import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";

import ImprimirIcono from "@material-ui/icons/Print";
import ViewStreamIcon from "@material-ui/icons/ViewStream";
import ViewQuiltIcon from "@material-ui/icons/ViewQuilt";

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
    const classes = this.props.classes;
    const viewtype = "grid";

    return (
      <AppBar color="primary" position="static">
        <Toolbar className={classes.bie}>
          <div>
            <Typography color="inherit" variant="title">
              ⚖ {this.props.titulo}
            </Typography>
          </div>
          <div>
            <Tooltip
              placement="bottom"
              title={viewtype === "grid" ? "Vista Lista" : "Vista Grilla"}
              >
              <IconButton aria-label="View Type" color="default">
                {viewtype === "grid" ? <ViewStreamIcon /> : <ViewQuiltIcon />}
              </IconButton>
            </Tooltip>
            <Tooltip title="Vista Impresión">
              <IconButton aria-label="Vista Impresión" color="default">
                <ImprimirIcono />
              </IconButton>
            </Tooltip>
          </div>
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
