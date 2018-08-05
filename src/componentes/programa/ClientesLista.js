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
import TextField from "@material-ui/core/TextField";
import Tooltip from "@material-ui/core/Tooltip";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
// import CommentIcon from "@material-ui/icons/Comment";

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
          <IconButton
            aria-label="Delete"
            className={classes.aireBoton}
            color="primary"
            onClick={props.handleNuevoCliente}
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
          <Button
            className={classes.aireBoton}
            color="primary"
            disabled={true}
            size="small"
            variant="contained"
            >
            Ver Documentos
          </Button>
        </div>
        <div>
          {props.showSearch ? (
            <div>
              {" "}
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
        <List>
          {props &&
            props.clientes.map(clientes => (
              <ListItem button dense disableGutters divider key={clientes.actor_id}>
                <Checkbox disableRipple tabIndex={-1} />
                <div>
                  <ListItemText primary={clientes.actor_id} />
                </div>
                <div>
                  <ListItemText
                    primary={clientes.first_name}
                    secondary={clientes.last_name}
                  />
                </div>
              </ListItem>
            ))}
        </List>
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
  checked: PropTypes.array
};

export default withStyles(styles)(ClientesLista);
