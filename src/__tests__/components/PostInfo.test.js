import { shallow } from "enzyme";
import React from "react";
import PostInfo from "../../components/PostInfo/PostInfo";

it("expect to render PostInfo component", () => {
  const post = {
    userId: 2,
    id: 10,
    body: "some text",
    title: "some title"
  };
  const component = shallow(<PostInfo data={post} />);
  expect(component.debug()).toMatchSnapshot();
});
