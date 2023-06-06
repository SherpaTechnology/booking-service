import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { IdProvider } from "./contexts/searchcard/search.context.jsx";
import { CardDetailsProvider } from "./contexts/cardDetails/cardDetails.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardDetailsProvider>
        <IdProvider>
          <App />
        </IdProvider>
      </CardDetailsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
