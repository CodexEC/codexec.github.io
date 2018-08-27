import Plantilla from "../../plantilla";
import React from "react";
import { render } from "enzyme";

describe("Plantilla", () => {
  it("sin errores", () => {
    render(<Plantilla />);
  });
});
