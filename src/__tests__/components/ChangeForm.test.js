import { shallow } from "enzyme";
import React from "react";
import ChangeForm from "../../components/ChangeForm/ChangeForm";

it("expect to render ChangeForm component", () => {
  const component = shallow(
    <ChangeForm
      onSubmit={() => {}}
      handlerTitle={() => {}}
      handlerBody={() => {}}
      text="Save"
    />
  );
  expect(component.debug()).toMatchSnapshot();
});
