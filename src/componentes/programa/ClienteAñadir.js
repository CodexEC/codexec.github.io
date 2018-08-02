import React from "react";
import PropTypes from "prop-types";

const ClienteAñadir = props => {
  return (
    <div>
      <form onSubmit={props.onAddCliente}>
        <input
          name="nombre_cliente"
          placeholder="Nombres"
          required
          type="text"
        />
        <input
          name="apellido_cliente"
          placeholder="Apellidos"
          required
          type="text"
        />
        <input
          name="id_cliente"
          readOnly
          type="text"
          value={Math.floor((Math.random() * 500) + 1000)}
        />
        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
};

ClienteAñadir.propTypes = {
  onAddCliente: PropTypes.func.isRequired
};

export default ClienteAñadir;
