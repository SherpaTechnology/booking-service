import { Fragment,useEffect } from "react";
import Home from "./pages/home/Home.page";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/Login.page";
import DestnationPpage from "./pages/destination/Destnation.page";
import AboutUsPage from "./pages/aboutus/AboutUs.page";
import ContactPage from "./pages/contact/Contact.pages";
import SearachPage from "./pages/search/Searach.page";
import "./assets/styles/main.sass";
import CardPreviewPage from "./pages/cardPreview/CardPreview.page";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/destination" element={<DestnationPpage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/contactus" element={<ContactPage />} />
        <Route path="/holidays" element={<SearachPage />} />
        <Route path="/holidays/:name" element={<CardPreviewPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
