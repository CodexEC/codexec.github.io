import ProgramaPagina from "../../contenedores/ProgramaPagina";
import React from "react";
import { render } from "enzyme";
import { MemoryRouter as Router } from "react-router-dom";

describe("CodexEC", () => {
  it("renders without crashing", () => {
    render(
      <Router>
        <ProgramaPagina />
      </Router>
    );
  });
  console.log("CODEX > 100%");
});
