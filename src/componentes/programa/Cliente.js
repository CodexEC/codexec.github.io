import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

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
  }
});

class Cliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosClientes: [],
      order: "asc",
      orderBy: "ree",
      showLista: true,
      showSearch: false,
      checked: [0]
    };
    this.handleOnAddCliente = this.handleOnAddCliente.bind(this);
    this.handleNuevoCliente = this.handleNuevoCliente.bind(this);
    this.handleAnyInputChange = this.handleAnyInputChange.bind(this);
    this.handleSearchToggle = this.handleSearchToggle.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    // @lodash
    // this.deBounced = debounce(this.handleSearchSubmit, 450)
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
      datosClientes: this.state.datosClientes.concat([cliente]),
      showLista: true
    });
    form.reset();
  }
  handleNuevoCliente() {
    this.setState({
      showLista: !this.state.showLista
    });
  }
  // captura el teclado
  handleAnyInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    // this.deBounced();
  }

  handleSearchToggle() {
    this.setState({
      showSearch: !this.state.showSearch
    });
  }

  handleToggle(value) {
    // const { checked } = this.state;
    const checked = this.state.checked;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
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
    } else if (this.state.showLista) {
      return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper>
              <ClientesLista
                checked={this.state.checked}
                clientes={this.state.datosClientes}
                fetchControl={this.state.fetchControl}
                handleAnyInputChange={this.handleAnyInputChange}
                handleNuevoCliente={this.handleNuevoCliente}
                handleSearchToggle={this.handleSearchToggle}
                handleToggle={this.handleToggle}
                ordenarPor={this.state.orderBy}
                showSearch={this.state.showSearch}
              />
            </Paper>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container spacing={16}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ClienteAñadir handleNuevoCliente={this.handleNuevoCliente} onAddCliente={this.handleOnAddCliente} />
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
