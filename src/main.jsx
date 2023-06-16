import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { IdProvider } from "./contexts/searchcard/search.context.jsx";
import { CardDetailsProvider } from "./contexts/cardDetails/cardDetails.context.jsx";
import { ToggleProvider } from "./contexts/showToggle/showToggle.context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CardDetailsProvider>
        <IdProvider>
          <ToggleProvider>
            <App />
          </ToggleProvider>
        </IdProvider>
      </CardDetailsProvider>
    </BrowserRouter>
  </React.StrictMode>
);
