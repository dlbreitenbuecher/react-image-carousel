import React from "react";
import { render } from "@testing-library/react";
import Card from './Card.js';
import image1 from "./image1.jpg";


it("renders without crashing", function () {
  render(<Card caption="Photo by Richard Pasquarella on Unsplash"
    src="image1"
    currNum="1"
    totalNum="3"
  />)
})

it("check if it renders valid view", function () {
  const { container, debug } = render(
    <Card caption="Photo by Richard Pasquarella on Unsplash"
      src={image1}
      currNum="1"
      totalNum="3"
    />)

  const img = container.querySelector("img");
  debug(img)
  expect(img.getAttribute("src")).toContain("image1.jpg")
})

it("matches snapshot", function () {
  const { container } = render(
    <Card caption="Photo by Richard Pasquarella on Unsplash"
      src={image1}
      currNum="1"
      totalNum="3"
    />);

  expect(container).toMatchSnapshot();
});