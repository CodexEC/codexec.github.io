import Backerimg from "../../componentes/backimg";
import React from "react";
import { shallow } from "enzyme";

describe("<Backerimg />", () => {
  it("renders without crashing", () => {
    const classes = "titulo";
    shallow(<Backerimg titulo={classes} />);
  });
  console.log("> Backerimg 100%");
});
