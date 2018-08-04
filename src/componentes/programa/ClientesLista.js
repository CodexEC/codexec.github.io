import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// TODO: implementar tabla cargada y con un checkbox que capture el id.
const ClientesLista = props => {
  console.log(props);
  return (
    <div>
      <ul>
        {props &&
          props.clientes.map(clientes => (
            <li key={clientes.actor_id}>
              {clientes.first_name} - {clientes.last_name}
            </li>
          ))}
      </ul>
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
  clientes: PropTypes.array.isRequired,
  order: PropTypes.string,
  ordenarPor: PropTypes.string,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
  fetchControl: PropTypes.object
};

export default ClientesLista;
