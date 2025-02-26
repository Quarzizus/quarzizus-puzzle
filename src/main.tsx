import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/index.tsx";
import "./styles/index.css";
import { ContextProvider } from "./context/AppContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);
