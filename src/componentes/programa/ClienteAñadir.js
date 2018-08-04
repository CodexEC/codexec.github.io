import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const styles = theme => ({
  aireControl: {
    margin: theme.spacing.unit
  }
});

const ClienteAñadir = props => {
  // const { classes } = this.props;
  const classes = props.classes;
  console.log(props);
  return (
    <div>
      <form onSubmit={props.onAddCliente}>
        <FormControl
          aria-describedby="name-helper-text"
          className={classes.aireControl}
          required
          >
          <InputLabel htmlFor="name-helper">Nombre</InputLabel>
          <Input name="nombre_cliente" required />
          <FormHelperText id="name-helper-text">
            Error al ingresar
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.aireControl} required>
          <InputLabel htmlFor="appellido-helper">Apellido</InputLabel>
          <Input name="apellido_cliente" required />
          <FormHelperText id="appellido-helper-text">
            Error al ingresar
          </FormHelperText>
        </FormControl>
        <FormControl className={classes.aireControl} error hidden required>
          <InputLabel htmlFor="id-helper">Id</InputLabel>
          <Input
            name="id_cliente"
            value={Math.floor(Math.random() * 500 + 1000)}
          />
          <FormHelperText id="id-helper-text">Error al ingresar</FormHelperText>
        </FormControl>
        <Button color="primary" style={{ margin: "28px" }} type="submit" variant="contained">
          Guardar
        </Button>
      </form>
    </div>
  );
};

ClienteAñadir.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddCliente: PropTypes.func.isRequired
};

export default withStyles(styles)(ClienteAñadir);
