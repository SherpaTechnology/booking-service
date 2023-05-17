/* eslint-disable react/prop-types */
import { Fragment } from "react";
import HeaderComponent from "../../components/header/Header.component";
import FooterComponent from "../../components/footer/Footer.component";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Fragment>
  );
};

export default Layout;
