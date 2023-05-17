import { Fragment } from "react";
import Home from "./pages/home/Home.page";
import { Route, Routes } from "react-router-dom";
import LoginPage from "./pages/login/Login.page";
import "./assets/styles/main.sass";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
