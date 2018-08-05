import React from "react";
import PropTypes from "prop-types";

const SimpleVista = props => {
  return (
    <div>
      <ul >
        {props.clientes.map(clientes => (
          <li key={clientes.actor_id}>
            {clientes.first_name} - {clientes.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

SimpleVista.propTypes = {
  clientes: PropTypes.array.isRequired
};

export default SimpleVista;
