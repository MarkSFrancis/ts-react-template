import React from "react";
import { shallow } from "enzyme";
import { HomePage } from "./HomePage";

describe("Home page", () => {
  it("Says hello world", () => {
    const homePage = shallow(<HomePage />);

    const title = homePage.find("h1");
    expect(title.exists()).toBeTruthy();
    expect(title.text()).toMatch(/Hello world/i);
  });
});
