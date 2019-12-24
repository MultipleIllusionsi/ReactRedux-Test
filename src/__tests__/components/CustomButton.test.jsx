import { shallow } from "enzyme";
import React from "react";
import CustomButton from "../../components/CustomButton/CustomButton";

it("expect to render CustomButton-link", () => {
  const component = shallow(
    <CustomButton
      className="go-back"
      to="/posts"
      color="black"
      text="Go back"
    />
  );
  expect(component.debug()).toMatchSnapshot();
});

it("expect to render CustomButton-handler", () => {
  const component = shallow(
    <CustomButton onClick={() => {}} color="red" text="Delete" />
  );
  expect(component.debug()).toMatchSnapshot();
});
