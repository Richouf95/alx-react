import React from "react";
import Header from "./Header";
import { shallow } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";
import { AppContext } from "../App/App";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("Header", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render a h1 and an img tag", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.exists("img")).toEqual(true);
    expect(wrapper.containsMatchingElement(<h1>School dashboard</h1>)).toEqual(true);
  });

  it("does not render logoutSection when isLoggedIn is false", () => {
    const contextValue = {
      user: { email: "", password: "" },
      isLoggedIn: false,
      logOut: jest.fn(),
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toEqual(false);
  });

  it("renders logoutSection when isLoggedIn is true and an email is set", () => {
    const contextValue = {
      user: { email: "test@example.com", password: "" },
      isLoggedIn: true,
      logOut: jest.fn(),
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    expect(wrapper.find("#logoutSection").exists()).toEqual(true);
    expect(wrapper.find("#logoutSection").text()).toContain("Welcome test@example.com");
  });

  it("calls logOut function when the logout link is clicked", () => {
    const logOutSpy = jest.fn();
    const contextValue = {
      user: { email: "test@example.com", password: "" },
      isLoggedIn: true,
      logOut: logOutSpy,
    };
    const wrapper = shallow(
      <AppContext.Provider value={contextValue}>
        <Header />
      </AppContext.Provider>
    );
    wrapper.find("#logoutSection button").simulate("click");
    expect(logOutSpy).toHaveBeenCalled();
  });
});
