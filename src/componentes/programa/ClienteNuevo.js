import React from "react";
import PropTypes from "prop-types";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";

const ClienteAñadir = props => {
  return (
    <div>
      <form onSubmit={props.handleAñadirCliente}>
        <FormControl aria-describedby="name-helper-text" required style={{ margin: "28px" }}>
          <InputLabel htmlFor="name-helper">Nombre</InputLabel>
          <Input name="nombre_cliente" required />
          <FormHelperText id="name-helper-text">
            Error al ingresar
          </FormHelperText>
        </FormControl>
        <FormControl required style={{ margin: "28px" }}>
          <InputLabel htmlFor="appellido-helper">Apellido</InputLabel>
          <Input name="apellido_cliente" required />
          <FormHelperText id="appellido-helper-text">
            Error al ingresar
          </FormHelperText>
        </FormControl>
        <FormControl error required style={{ margin: "28px" }}>
          <InputLabel htmlFor="id-helper">Id</InputLabel>
          <Input
            name="id_cliente"
            value={Math.floor(Math.random() * 500 + 1000)}
          />
          <FormHelperText id="id-helper-text">Error al ingresar</FormHelperText>
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
  );
};

ClienteAñadir.propTypes = {
  classes: PropTypes.object.isRequired,
  handleAñadirCliente: PropTypes.func.isRequired,
  tipo: PropTypes.string
};

export default ClienteAñadir;
