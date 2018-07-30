import React from "react";
// import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import plantilla from "../../plantilla/index";

import Programa from "../../componentes/programa";

function ProgramaPagina() {
  // const { classes } = props;

  return (
    <div>
      <Helmet>
        <title>CodexEC</title>
      </Helmet>
      <Programa/>
    </div>
  );
}

/* ProgramaPagina.propTypes = {
  classes: PropTypes.object.isRequired
};
 */
export default plantilla(ProgramaPagina);
