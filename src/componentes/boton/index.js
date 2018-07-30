import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

function Boton() {
  return (
    <div>
      <Button color="primary" variant="contained">
        Ayuda
      </Button>
      <Button component={Link} to="/">
        Ingreso
      </Button>
    </div>
  );
}

export default Boton;
