import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import NewIcon from "@material-ui/icons/Person";
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
import Divider from "@material-ui/core/Divider";

import GridRenderer from "../../plantilla/TiposVista/GridRenderer";

// TODO: implementar tabla cargada y con un checkbox que capture el id.
// TODO: implementar un componente busqueda

const styles = theme => ({
  bie: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  aireBoton: {
    margin: theme.spacing.unit
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  }
});

const ClientesLista = props => {
  const classes = props.classes;
  console.log(props);
  return (
    <div>
      <div className={classes.bie}>
        <div>
          <Tooltip placement="bottom" title="Nuevo">
            <IconButton
              aria-label="Nuevo"
              className={classes.aireBoton}
              color="primary"
              onClick={props.handleNuevoCliente}
              >
              <NewIcon />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" title="Editar">
            <IconButton
              aria-label="Editar"
              className={classes.aireBoton}
              color="primary"
              disabled={false}
              >
              <EditIcon />
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" title="Borrar">
            <IconButton
              aria-label="Borrar"
              className={classes.aireBoton}
              color="primary"
              disabled={false}
              >
              <DeleteIcon />
            </IconButton>
          </Tooltip>
          <Button
            className={classes.aireBoton}
            color="primary"
            disabled={true}
            size="small"
            variant="contained"
            >
            Ver Documentos
          </Button>
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
            <IconButton aria-label="Vista Impresión" color="primary" onClick={props.handlearCambioVistaImpresion}>
              <PrintIcon />
            </IconButton>
          </Tooltip>
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
                  className={classes.aireBoton}
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
                className={classes.aireBoton}
                color="primary"
                onClick={props.handleSearchToggle}
                >
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}
        </div>
      </div>
      <Divider />
      <div>
        <GridRenderer clientes={props.clientes} totalClientes={props.totalClientes} vista={props.vista}/>
      </div>
    </div>
  );
};

ClientesLista.defaultProps = {
  clientes: [],
  order: "asc",
  ordenarPor: "ciudad",
  page: 0,
  rowsPerPage: 5,
  selected: [],
  fetchControl: {
    status: "sucess",
    error: ""
  }
};

ClientesLista.propTypes = {
  classes: PropTypes.object.isRequired,
  clientes: PropTypes.array.isRequired,
  order: PropTypes.string,
  ordenarPor: PropTypes.string,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
  fetchControl: PropTypes.object,
  handleNuevoCliente: PropTypes.func,
  showSearch: PropTypes.bool,
  handleAnyInputChange: PropTypes.func,
  handleSearchToggle: PropTypes.func,
  handleToggle: PropTypes.func,
  checked: PropTypes.array,
  vista: PropTypes.string,
  handlearCambioVistaLista: PropTypes.func,
  handlearCambioVistaTabla: PropTypes.func,
  handlearCambioVistaImpresion: PropTypes.func,
  totalClientes: PropTypes.number
};

export default withStyles(styles)(ClientesLista);
