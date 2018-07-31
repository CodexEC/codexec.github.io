import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import ClientesLista from "./ClientesLista";
import ClienteAñadir from "./ClienteAñadir";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
});

class Cliente extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientes: [
        { id: 1, nombre: "Jhon", ci: "17190678777" },
        { id: 2, nombre: "WIlson", ci: "17190678777" },
        { id: 3, nombre: "Ecuador", ci: "17190678777" },
        { id: 4, nombre: "Odiceo", ci: "17190678777" },
        { id: 5, nombre: "Karina", ci: "17190678777" }
      ],
      order: "asc",
      orderBy: "calorias"

    };
    this.handleOnAddCliente = this.handleOnAddCliente.bind(this);
  }

  handleOnAddCliente(e) {
    console.log("====================================");
    console.log("ON AÑADIR");
    console.log("====================================");
    e.preventDefault();
    let form = e.target,
      cliente = {
        id: form.id_cliente.value,
        nombre: form.nombre_cliente.value,
        ci: form.ci_cliente.value
      };
    this.setState({
      clientes: this.state.clientes.concat([cliente])
    });
    form.reset();
  }

  componentWillMount() {
    console.log("====================================");
    console.log("Cargo Clientes " + this.state.clientes);
    console.log("====================================");
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <h1>Lista Clientes</h1>
            <ClientesLista
              clientes={this.state.clientes}
              ordenarPor={this.state.orderBy}
            />
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper>
            xs=12 sm=6 Art. 1.- La ley es una declaración de la voluntad
            soberana que, manifestada en la forma prescrita por la Constitución,
            manda, prohíbe o permite. Son leyes las normas generalmente
            obligatorias de interés común. Art. 2.- La costumbre no constituye
            derecho sino en los casos en que la ley se remite a ella.
          </Paper>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Paper className={classes.paper}>
          <ClienteAñadir onAddCliente={this.handleOnAddCliente} />
          </Paper>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Paper className={classes.paper}>
            xs=6 sm=3 Art. 1.- La ley es una declaración de la voluntad soberana
            que, manifestada en la forma prescrita por la Constitución, manda,
            prohíbe o permite. Son leyes las normas generalmente obligatorias de
            interés común. Art. 2.- La costumbre no constituye derecho sino en
            los casos en que la ley se remite a ella. Art. 1.- La ley es una
            declaración de la voluntad soberana que, manifestada en la forma
            prescrita por la Constitución, manda, prohíbe o permite. Son leyes
            las normas generalmente obligatorias de interés común. Art. 2.- La
            costumbre no constituye derecho sino en los casos en que la ley se
            remite a ella.
          </Paper>
        </Grid>
        <Grid item sm={3} xs={6}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    );
  }
}

Cliente.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Cliente);
