import React from "react";
import { shallow } from "enzyme";
import { findTagsWithTestAttribute } from "../../testUtils";
import CurrencyPairsSelector from "./CurrencyPairsSelector";

const setup = (props = {}) => {
  return shallow(<CurrencyPairsSelector {...props} />);
};

it("renders without errors", () => {
  const wrapper = setup();
  expect(
    findTagsWithTestAttribute(
      wrapper,
      "component-CurrencyPairsSelector"
    ).exists()
  ).toBe(true);
});
