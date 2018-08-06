import React from "react";
import PropTypes from "prop-types";
// TODO: implementar el cambio setInterval
const Tiempo = props => {
  console.log(props.elapsed);
  var elapsed = Math.round(props.elapsed / 100);
  var seconds = elapsed / 10 + (elapsed % 10 ? "" : ".0");
  var message =
    "React has been successfully running for " + seconds + " seconds.";
  return (
    <div>
      <p>tiempo :D {message}</p>
    </div>
  );
};

Tiempo.propTypes = {
  elapsed: PropTypes.number
};

export default Tiempo;
