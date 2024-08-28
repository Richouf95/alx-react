import React, { createContext, useState } from "react";
import PropTypes from "prop-types";

const defaultUser = {
  email: "",
  password: "",
  isLoggedIn: false,
};

const AppContext = createContext({
  user: defaultUser,
  logOut: () => {},
});

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const logOut = () => {
    setUser({ ...defaultUser });
  };

  return (
    <AppContext.Provider value={{ user, logOut }}>
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppContext;
