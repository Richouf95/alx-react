/**
 * @jest-environment jsdom
 */
import React from "react";
import App from "./App";
import Login from "../Login/Login";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Notifications from "../Notifications/Notifications";
import CourseList from "../CourseList/CourseList";
import { shallow, mount } from "enzyme";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("App tests", () => {
  it("renders without crashing", () => {
    const component = shallow(<App />);
    expect(component).toBeDefined();
  });

  it("should render Notifications component", () => {
    const component = shallow(<App />);
    expect(component.containsMatchingElement(<Notifications />)).toEqual(false);
  });

  it("should render Header component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Header />)).toBe(true);
  });

  it("should render Login Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Login />)).toBe(true);
  });

  it("should render Footer Component", () => {
    const component = shallow(<App />);
    expect(component.contains(<Footer />)).toBe(true);
  });

  it("does not render CourseList if logged out", () => {
    const component = shallow(<App />);
    expect(component.contains(<CourseList />)).toBe(false);
  });

  it("renders CourseList if logged in", () => {
    const component = shallow(<App />);
    component.setState({ isLoggedIn: true });
    expect(component.containsMatchingElement(<CourseList />)).toEqual(true);
    expect(component.contains(<Login />)).toBe(false);
  });

  it("should have displayDrawer state default to false", () => {
    const component = shallow(<App />);
    expect(component.state("displayDrawer")).toBe(false);
  });

  it("should set displayDrawer to true when handleDisplayDrawer is called", () => {
    const component = shallow(<App />);
    component.instance().handleDisplayDrawer();
    expect(component.state("displayDrawer")).toBe(true);
  });

  it("should set displayDrawer to false when handleHideDrawer is called", () => {
    const component = shallow(<App />);
    component.setState({ displayDrawer: true }); // Set it to true first
    component.instance().handleHideDrawer();
    expect(component.state("displayDrawer")).toBe(false);
  });
});

describe("When ctrl + h is pressed", () => {
  it("calls logOut function", () => {
    const wrapper = mount(<App />);
    wrapper.setState({ isLoggedIn: true });
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(wrapper.state("isLoggedIn")).toBe(false);
    wrapper.unmount();
  });

  it("checks that alert function is called", () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    wrapper.unmount();
  });

  it('checks that the alert is "Logging you out"', () => {
    const wrapper = mount(<App />);
    const spy = jest.spyOn(window, "alert");
    const event = new KeyboardEvent("keydown", { ctrlKey: true, key: "h" });
    document.dispatchEvent(event);

    expect(spy).toHaveBeenCalledWith("Logging you out");
    jest.restoreAllMocks();
    wrapper.unmount();
  });
});

describe("App state management", () => {
  it("logIn function updates the state correctly", () => {
    const component = shallow(<App />);
    component.instance().logIn("test@example.com", "password");
    expect(component.state("user")).toEqual({
      email: "test@example.com",
      password: "password",
    });
    expect(component.state("isLoggedIn")).toBe(true);
  });

  it("logOut function updates the state correctly", () => {
    const component = shallow(<App />);
    component.setState({ isLoggedIn: true });
    component.instance().logOut();
    expect(component.state("user")).toEqual({
      email: "",
      password: "",
    });
    expect(component.state("isLoggedIn")).toBe(false);
  });
});
