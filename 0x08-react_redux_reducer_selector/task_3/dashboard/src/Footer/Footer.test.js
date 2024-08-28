import React from "react";
import { mount } from "enzyme";
import Footer from "./Footer";
import { getFullYear, getFooterCopy } from "../utils/utils";
import { AppContext } from "../App/AppContext";

describe("Footer tests", () => {
  it("should render without crashing", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ isLoggedIn: false }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.exists()).toEqual(true);
  });

  it("should render the text Copyright", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ isLoggedIn: false }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.text()).toContain(`Copyright ${getFullYear()} - ${getFooterCopy()}`);
  });

  it("should not display the 'Contactez-nous' link when the user is logged out", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ isLoggedIn: false }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').exists()).toEqual(false);
  });

  it("should display the 'Contactez-nous' link when the user is logged in", () => {
    const wrapper = mount(
      <AppContext.Provider value={{ isLoggedIn: true }}>
        <Footer />
      </AppContext.Provider>
    );
    expect(wrapper.find('a').text()).toEqual('Contactez-nous');
  });
});
