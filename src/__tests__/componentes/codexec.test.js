import React from "react";
import { shallow } from "enzyme";
import App from "../../App.codexec";

describe("Rutas componente más alto en CODEXEC", () => {
  let app = shallow(<App />);
  it("contiene las rutas", () => {
    expect(app.find("Route")).toHaveLength(7);
  });
});
