import React from "react";
import { shallow } from "enzyme";
import { findTagsWithTestAttribute } from "../../testUtils";
import CurrencyPairsRateList from "./CurrencyPairsRateList";

const setup = (props = {}) => {
  return shallow(<CurrencyPairsRateList {...props} />);
};

it("renders without errors", () => {
  const wrapper = setup();
  expect(
    findTagsWithTestAttribute(
      wrapper,
      "component-CurrencyPairsRateList"
    ).exists()
  ).toBe(true);
});
