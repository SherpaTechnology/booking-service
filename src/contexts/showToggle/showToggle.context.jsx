/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ShowToggleContext = createContext({
  show: true,
  setShow: () => {},
});

export const ToggleProvider = ({ children }) => {
  const [show, setShow] = useState(true);
  const value = { show, setShow };
  return (
    <ShowToggleContext.Provider value={value}>
      {children}
    </ShowToggleContext.Provider>
  );
};
