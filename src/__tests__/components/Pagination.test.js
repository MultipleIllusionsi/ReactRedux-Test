import { shallow } from "enzyme";
import React from "react";
import Pagination from "../../components/Pagination/Pagination";

it("expect to render Pagination component", () => {
  const component = shallow(
    <Pagination handler={() => {}} page={5} length={10} />
  );
  expect(component.debug()).toMatchSnapshot();
});
