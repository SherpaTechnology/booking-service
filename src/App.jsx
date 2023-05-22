import { Fragment } from "react";
import Home from "./pages/home/Home.page";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/Login.page";
import DestnationPpage from "./pages/destination/Destnation.page";
import "./assets/styles/main.sass";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/destination" element={<DestnationPpage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
