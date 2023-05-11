/* eslint-disable react/prop-types */
import { Fragment, useEffect } from "react";
import HeaderComponent from "../../components/header/Header.component"
import FooterComponent from "../../components/footer/Footer.component"

const Layout = ({ children }) => {
  useEffect(() => {
    window.scrollBy(0, 0);
  }, []);
  return (
    <Fragment>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </Fragment>
  );
};

export default Layout;
