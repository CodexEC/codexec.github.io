import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { ClienteServicio } from "../../servicio/ClienteServicio";
import Loader from "../../plantilla/loader";
import ClientesLista from "./ClientesLista";
import ClienteAñadir from "./ClienteAñadir";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  aireBoton: {
    margin: theme.spacing.unit
  }
});

class Cliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosClientes: [],
      order: "asc",
      orderBy: "ree"
    };
    this.handleOnAddCliente = this.handleOnAddCliente.bind(this);
    this.clienteservicio = new ClienteServicio();
  }

  handleOnAddCliente(e) {
    e.preventDefault();
    let form = e.target,
      cliente = {
        /* eslint-disable-next-line */
        actor_id: form.id_cliente.value,
        /* eslint-disable-next-line */
        first_name: form.nombre_cliente.value,
        /* eslint-disable-next-line */
        last_name: form.apellido_cliente.value
      };
    this.setState({
      datosClientes: this.state.datosClientes.concat([cliente])
    });
    form.reset();
  }

  componentWillMount() {}

  componentDidMount() {
    this.datosClientes = this.clienteservicio.traerClientes(this);
    // this.clienteservicio.traerClientes().then(data => this.setState({datosClientes: data}));
  }

  componentWillUnmount() {}

  render() {
    const { classes } = this.props;
    if (!this.state.datosClientes.length) {
      return <Loader />;
    } else {
      return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ClienteAñadir onAddCliente={this.handleOnAddCliente} />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <Button
                className={classes.aireBoton}
                color="primary"
                variant="contained"
                >
                Nuevo
              </Button>
              <Button
                className={classes.aireBoton}
                color="secondary"
                variant="contained"
                >
                Modificar
              </Button>
              <Button
                className={classes.aireBoton}
                color="secondary"
                onClick={this.eliminarDatos}
                variant="contained"
                >
                Eliminar
              </Button>
              <Button
                className={classes.aireBoton}
                color="secondary"
                disabled
                variant="contained"
                >
                Ver Documentos
              </Button>
              <ClientesLista
                clientes={this.state.datosClientes}
                fetchControl={this.state.fetchControl}
                ordenarPor={this.state.orderBy}
              />
            </Paper>
          </Grid>
        </Grid>
      );
    }
  }
}

Cliente.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cliente);
