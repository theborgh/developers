import React from "react";
import { shallow } from "enzyme";
import { findTagsWithTestAttribute } from "../../testUtils";
import ExchangeRateClient from "./ExchangeRateClient";

const setup = (props = {}) => {
  return shallow(<ExchangeRateClient {...props} />);
};

it("renders without errors", () => {
  const wrapper = setup();
  expect(
    findTagsWithTestAttribute(wrapper, "component-ExchangeRateClient").exists()
  ).toBe(true);
});
