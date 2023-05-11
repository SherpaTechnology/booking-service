import { Fragment } from "react";
import Home from "./pages/home/Home.page";
import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.sass";


function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Fragment>
  );
}

export default App;
