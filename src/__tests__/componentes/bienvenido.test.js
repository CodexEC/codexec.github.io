import Bienvenido from "../../contenedores/bienvenido";
import React from "react";
import { render } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";

describe("<Bienvenido />", () => {
  it("renders without crashing", () => {
    render(
        <Router>
          <Bienvenido />
        </Router>
    );
  });
});
