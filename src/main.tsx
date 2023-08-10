import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App.tsx";

// Import styles
import "./assets/css/index.css";

// import bootstrap
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
