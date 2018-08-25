import React from "react";
import PropTypes from "prop-types";
import GridRenderer from "../../plantilla/TiposVista/GridRenderer";

// TODO: implementar tabla cargada y con un checkbox que capture el id.
// TODO: implementar un componente busqueda

const ClientesLista = props => {
  return (
    <div>
        <GridRenderer clientes={props.clientes} totalClientes={props.totalClientes} vista={props.vista}/>
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
  classes: PropTypes.object.isRequired,
  clientes: PropTypes.array.isRequired,
  order: PropTypes.string,
  ordenarPor: PropTypes.string,
  page: PropTypes.number,
  rowsPerPage: PropTypes.number,
  selected: PropTypes.array,
  fetchControl: PropTypes.object,
  handleNuevoCliente: PropTypes.func,
  showSearch: PropTypes.bool,
  handleAnyInputChange: PropTypes.func,
  handleSearchToggle: PropTypes.func,
  handleToggle: PropTypes.func,
  checked: PropTypes.array,
  vista: PropTypes.string,
  handlearCambioVistaLista: PropTypes.func,
  handlearCambioVistaTabla: PropTypes.func,
  handlearCambioVistaImpresion: PropTypes.func,
  totalClientes: PropTypes.number,
  handlearPDF: PropTypes.func
};

export default ClientesLista;
