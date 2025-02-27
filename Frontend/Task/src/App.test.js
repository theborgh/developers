import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("is set up correctly", () => {
  expect(typeof null).toBe("object");
});

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
