/* eslint-disable no-undef */
import { createContext, useState } from "react";

export const InputvalueContext = createContext({
  email: "",
  password: "",
  setValue: () => null,
});
const initialValues = {
  email: "",
  password: "",
};
// eslint-disable-next-line react/prop-types, no-unused-vars
export const InputValueProvider = ({ children }) => {
  // eslint-disable-next-line no-unused-vars
  const [value, setValue] = useState(initialValues);
  const valuses = { email, password, setValue };

  return (
    <InputvalueContext.Provider value={valuses}>
      {children}
    </InputvalueContext.Provider>
  );
};
