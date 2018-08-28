import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import { ClienteServicio } from "../../servicio/ClienteServicio";
import Loader from "../../plantilla/loader";
import ClientesLista from "./ClientesLista";
import ClienteNuevo from "./ClienteNuevo";
import ClienteTop from "./ClienteTop";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    textAlign: "center",
    color: theme.palette.text.paper
  }
});

class Cliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datosClientes: [],
      order: "asc",
      orderBy: "ree",
      showLista: false,
      showSearch: false,
      checked: [0],
      vista: "lista",
      totalClientes: 0
    };
    this.handleNuevoCliente = this.handleNuevoCliente.bind(this);
    this.handleMostrarLista = this.handleMostrarLista.bind(this);
    this.handleAnyInputChange = this.handleAnyInputChange.bind(this);
    this.handleSearchToggle = this.handleSearchToggle.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handlearCambioVistaLista = this.handlearCambioVistaLista.bind(this);
    this.handlearCambioVistaTabla = this.handlearCambioVistaTabla.bind(this);
    this.handlearCambioVistaImpresion = this.handlearCambioVistaImpresion.bind(
      this
    );
    this.handlearPDF = this.handlearPDF.bind(this);
    // @lodash
    // this.deBounced = debounce(this.handleSearchSubmit, 450)
    this.clienteservicio = new ClienteServicio();
  }

  handleNuevoCliente(e) {
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
      showLista: !this.state.showLista
    });
    form.reset();
  }
  handleMostrarLista() {
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

  handlearCambioVistaLista() {
    const newVal = this.state.vista === "lista" ? "l-simple" : "lista";
    window.localStorage.setItem("vista", newVal);
    this.setState({
      vista: newVal
    });
  }
  handlearCambioVistaTabla() {
    const newVal = this.state.vista === "tabla" ? "t-simple" : "tabla";
    window.localStorage.setItem("vista", newVal);
    this.setState({
      vista: newVal
    });
  }
  handlearCambioVistaImpresion() {
    const newVal = "impresion";
    this.setState({
      totalClientes: this.state.datosClientes.length,
      vista: newVal
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
  // HACK: al  hacer click handlearPDF() generar un reporte sin estilos, limpio
  handlearPDF() {
    window.print(console.log("> Imprimir"));
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
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ClienteTop
                handleMostrarLista={this.handleMostrarLista}
                tipo="barraClienteLista"
              />
              <Divider />
              <ClientesLista
                checked={this.state.checked}
                clientes={this.state.datosClientes}
                fetchControl={this.state.fetchControl}
                handleAnyInputChange={this.handleAnyInputChange}
                handlearCambioVistaImpresion={this.handlearCambioVistaImpresion}
                handlearCambioVistaLista={this.handlearCambioVistaLista}
                handlearCambioVistaTabla={this.handlearCambioVistaTabla}
                handlearPDF={this.handlearPDF}
                handleSearchToggle={this.handleSearchToggle}
                handleToggle={this.handleToggle}
                ordenarPor={this.state.orderBy}
                showSearch={this.state.showSearch}
                totalClientes={this.state.totalClientes}
                vista={this.state.vista}
              />
            </Paper>
          </Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container spacing={24}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <ClienteTop
                handleMostrarLista={this.handleMostrarLista}
                tipo="barraClienteNuevo"
              />
              <Divider />
              <ClienteNuevo handleNuevoCliente={this.handleNuevoCliente} />
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
