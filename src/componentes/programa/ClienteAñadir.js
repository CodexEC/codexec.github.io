import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
import IconoAñadir from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  bie: {
    flex: "0 0 auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"
  },
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
      <div className={classes.bie}>
        <IconButton
          aria-label="Delete"
          className={classes.aireControl}
          color="primary"
          onClick={props.handleNuevoCliente}
          >
          <IconoAñadir />
        </IconButton>
        <Typography className={classes.aireControl} variant="headline">
          {"Nuevo"}
        </Typography>
      </div>
      <Divider />
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
          <FormControl className={classes.aireControl} error required>
            <InputLabel htmlFor="id-helper">Id</InputLabel>
            <Input
              name="id_cliente"
              value={Math.floor(Math.random() * 500 + 1000)}
            />
            <FormHelperText id="id-helper-text">
              Error al ingresar
            </FormHelperText>
          </FormControl>
          <Button
            color="primary"
            style={{ margin: "28px" }}
            type="submit"
            variant="contained"
            >
            Guardar
          </Button>
        </form>
      </div>
    </div>
  );
};

ClienteAñadir.propTypes = {
  classes: PropTypes.object.isRequired,
  onAddCliente: PropTypes.func.isRequired,
  handleNuevoCliente: PropTypes.func.isRequired
};

export default withStyles(styles)(ClienteAñadir);
