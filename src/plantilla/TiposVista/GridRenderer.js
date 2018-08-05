import React from "react";
import PropTypes from "prop-types";
import ListaVista from "./ListaVista";
import SimpleVista from "./SimpleVista";
// TODO: implementar vista impresion y  vista vcard para cualquier dato

const GridRenderer = ({ clientes, vista }) => {
  const grid = vista === "grid";
  return (
    <div>
      {vista === "simple" && <SimpleVista clientes={clientes} />}
      {!grid &&
        vista !== "impresion" &&
        vista !== "simple" && <ListaVista clientes={clientes} />}
    </div>
  );
};

GridRenderer.propTypes = {
  clientes: PropTypes.array.isRequired,
  vista: PropTypes.string
};

export default GridRenderer;
