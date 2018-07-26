// Copyright 2004-present Facebook. All Rights Reserved.

/* eslint-disable no-unused-vars */
// test file
import React from "react";
import { shallow, mount, render } from "enzyme";

import CheckboxWithLabel from "../../componentes/box";

it("CheckboxWithLabel changes the text after click", () => {
  // Render a checkbox with label in the document
  const checkbox = shallow(<CheckboxWithLabel labelOff="Off" labelOn="On" />);

  expect(checkbox.text()).toEqual("Off");

  checkbox.find("input").simulate("change");

  expect(checkbox.text()).toEqual("On");
});
