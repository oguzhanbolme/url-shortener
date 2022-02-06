import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { UrlProvider } from "./context/UrlContext";

ReactDOM.render(
  <React.StrictMode>
    <UrlProvider>
      <App />
    </UrlProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
