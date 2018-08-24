import React from "react";
import { shallow } from "enzyme";
import App from "../../App.codexec";

describe("Componente más alto en CODEXEC", () => {
  let app = shallow(<App />);

  it("Should have a div with className of app", () => {
    expect(app.find(".codexec")).to.
  });
  console.log("asd");
});
 