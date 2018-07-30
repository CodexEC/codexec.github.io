import React from "react";
import { shallow, mount, render } from "enzyme";

import Foo from "../../componentes/contador";

describe("A suite", function() {
  it("should render without throwing an error", function() {
    expect(shallow(<Foo />).contains(<p className="hora">Tiempo es: 0</p>)).toBe(true);
  });
/*
  it('should be selectable by class "foo"', function() {
    expect(shallow(<Foo />).is("hora")).toBe(true);
  });

  it("should mount in a full DOM", function() {
    expect(mount(<Foo />).find("hora")).toHaveLength(1);
  }); */

  it("should render to static HTML", function() {
    expect(render(<Foo />).text()).toEqual("Tiempo es: 0");
  });
});
