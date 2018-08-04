import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import NewIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";

// TODO: implementar tabla cargada y con un checkbox que capture el id.

const styles = theme => ({
  bie: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
  aireBoton: {
    margin: theme.spacing.unit
  }
});

const ClientesLista = props => {
  const classes = props.classes;
  const showSearch = false;
  console.log(props);
  return (
    <div>
      <div className={classes.bie}>
        <div>
          <IconButton
            aria-label="Delete"
            className={classes.aireBoton}
            color="primary"
            >
            <NewIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            className={classes.aireBoton}
            color="primary"
            disabled={true}
            >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="Delete"
            className={classes.aireBoton}
            color="primary"
            disabled={true}
            >
            <DeleteIcon />
          </IconButton>
        </div>
        <div>
          {showSearch ? (
            <div>
              <TextField
                name="searchText"
                placeholder="Buscar"
                style={{ display: "" }}
              />
              <Tooltip
                placement="bottom"
                style={{ display: "none" }}
                title="Cerrar Búsqueda"
                >
                <IconButton aria-label="Cerrar Búsqueda" color="default">
                  <CloseIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
            <Tooltip
              placement="bottom"
              style={{ display: "block" }}
              title="Buscar"
              >
              <IconButton aria-label="Buscar" color="primary">
                <SearchIcon />
              </IconButton>
            </Tooltip>
          )}
          <Button
            className={classes.aireBoton}
            color="secondary"
            disabled={true}
            size="small"
            variant="contained"
            >
            Ver Documentos
          </Button>
        </div>
      </div>
      <div>
        <ul>
          {props &&
            props.clientes.map(clientes => (
              <li key={clientes.actor_id}>
                {clientes.first_name} - {clientes.last_name}
              </li>
            ))}
        </ul>
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
  fetchControl: PropTypes.object
};

export default withStyles(styles)(ClientesLista);
