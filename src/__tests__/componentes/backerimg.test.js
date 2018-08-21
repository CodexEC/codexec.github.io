import Backerimg from "../../componentes/backimg";
import React from "react";
import { shallow } from "enzyme";

describe("<Backerimg />", () => {
  it("renders without crashing", () => {
    shallow(<Backerimg />);
  });
  console.log("> Backerimg 100%");
});
