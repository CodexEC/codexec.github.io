import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import IconoCliente from "@material-ui/icons/Person";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconoAñadirCliente from "@material-ui/icons/PersonAdd";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import PrintIcon from "@material-ui/icons/Print";
import ViewStreamIcon from "@material-ui/icons/ViewList";
import ViewQuiltIcon from "@material-ui/icons/ViewAgenda";
import TablaIcono from "@material-ui/icons/Tab";
import TablaSimpleIcono from "@material-ui/icons/TableChart";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import { Link } from "react-router-dom";

const styles = theme => ({
  aire: {
    margin: theme.spacing.unit
  }
});

const ClienteTop = props => {
  const esTopClienteLista = props.tipo === "topLista";
  const { classes } = props;
  console.log(props.handleMostrarLista);
  if (esTopClienteLista) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        >
        <div>
          <Tooltip placement="bottom" title="Nuevo">
            <IconButton
              aria-label="Nuevo"
              className={classes.aire}
              color="primary"
              onClick={props.handleMostrarLista}
              >
              <IconoAñadirCliente />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" title="Editar">
            <IconButton
              aria-label="Editar"
              className={classes.aire}
              color="primary"
              disabled={false}
              >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" title="Borrar">
            <IconButton
              aria-label="Borrar"
              className={classes.aire}
              color="primary"
              disabled={false}
              >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Tooltip
            placement="bottom"
            title={props.vista === "lista" ? "Simple" : "Lista"}
            >
            <IconButton
              aria-label="Tipo Vista"
              color="primary"
              onClick={props.handlearCambioVistaLista}
              >
              {props.vista === "l-simple" ? (
                <ViewStreamIcon />
              ) : (
                <ViewQuiltIcon />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip
            placement="bottom"
            title={props.vista === "tabla" ? "Simple" : "Tabla"}
            >
            <IconButton
              aria-label="Tipo Vista"
              color="primary"
              onClick={props.handlearCambioVistaTabla}
              >
              {props.vista === "t-simple" ? (
                <TablaIcono />
              ) : (
                <TablaSimpleIcono />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip title="Vista Impresión">
            <IconButton
              aria-label="Vista Impresión"
              color="primary"
              component={Link}
              to={"/programa/i-simple"}
              >
              <PrintIcon />
            </IconButton>
          </Tooltip>
          <Button
            className={classes.aire}
            color="primary"
            disabled={true}
            size="small"
            variant="contained"
            >
            Ver Documentos
          </Button>
          <Button
            className={classes.aire}
            color="primary"
            onClick={props.handlearPDF}
            size="small"
            variant="outlined"
            >
            Imprimir
          </Button>
        </div>
        <div>
          {props.showSearch ? (
            <div>
              <TextField
                name="searchText"
                onChange={props.handleAnyInputChange}
                placeholder="Buscar"
              />
              <Tooltip placement="bottom" title="Cerrar Búsqueda">
                <IconButton
                  aria-label="Cerrar Búsqueda"
                  className={classes.aire}
                  color="default"
                  onClick={props.handleSearchToggle}
                  >
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <Tooltip placement="bottom" title="Buscar">
              <IconButton
                aria-label="Buscar"
                className={classes.aire}
                color="primary"
                onClick={props.handleSearchToggle}
                >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
        >
        <IconButton
          aria-label="Nuevo"
          className={classes.aire}
          color="primary"
          onClick={props.handleMostrarLista}
          >
          <IconoCliente />
        </IconButton>
        <Typography className={classes.aire} variant="headline">
          {"Datos del Cliente"}
        </Typography>
      </div>
    );
  }
};

ClienteTop.propTypes = {
  tipo: PropTypes.string.isRequired,
  handleMostrarLista: PropTypes.func
};

export default withStyles(styles)(ClienteTop);
