import Plantilla from "../../plantilla";
import React from "react";
import { render } from "enzyme";

describe("Plantilla", () => {
  it("renders without crashing", () => {
    render(<Plantilla />);
  });
  console.log("Plantilla > 100%");
});
