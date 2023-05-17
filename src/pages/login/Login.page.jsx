/* eslint-disable no-undef */
import { useState } from "react";

import Layout from "../../common/layout/Layout";
import InputComponent from "../../components/input/Input.component";
import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../../components/button/Button.component";

const DefaultValues = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [formFields, setFormFields] = useState(DefaultValues);
  const { email, password } = formFields;
  console.log("formfields", formFields);
  const handleFormFields = e => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmitFormFields = e => {
    e.preventDefault();
    alert("Data submitted  successfully!");
  };
  return (
    <Layout>
      <div className="wrapper">
        <h1 className="login-title">Manage Your Booking</h1>
        <div className="login-page">
          <form action="">
            <div className="input-section">
              <p>
                Log in to your Evertrek account below to see your active
                bookings, enter details, and arrange payment.
              </p>
              <InputComponent
                type="email"
                name="email"
                label="email"
                value={email}
                onChange={e => handleFormFields(e)}
                required
              />
              <InputComponent
                type="password"
                name="password"
                label="password"
                value={password}
                onChange={e => handleFormFields(e)}
                required
              />
            </div>
            <div className="button-section">
              <ButtonComponent
                buttonType={BUTTON_TYPE_CLASSES.normal}
                onClick={e => handleSubmitFormFields(e)}
              >
                Login
              </ButtonComponent>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;
