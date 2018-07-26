import React, { Component } from "react";
import PropTypes from "prop-types";

import BarraArriba from "./Appbar";
// import Header from './Header';
import Pie from "./Footer";
import { withRouter } from "react-router-dom";

class Plantilla extends Component {
  render() {
    return (
      <div>
        <BarraArriba />
        <Pie />
      </div>
    );
  }
}

Plantilla.propTypes = {
  titulo: PropTypes.string
};

export default withRouter(Plantilla);
