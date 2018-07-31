import React from "react";
import PropTypes from "prop-types";
// import { withStyles } from "@material-ui/core/styles";
// TODO: implementar tabla cargada y con un checkbox que capture el id.
const ClientesLista = props => {

  return (
    <div>
      <ul>
        {props.clientes.map(clientes => (
          <li key={clientes.id}>
            {clientes.id} - {clientes.nombre} +++ {clientes.ci}
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
  selected: []
};

ClientesLista.propTypes = {
  clientes: PropTypes.array.isRequired,
  order: PropTypes.string,
  ordenarPor: PropTypes.string,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array
};

export default ClientesLista;
