import React from "react";
import ReactDOM from "react-dom/client";
import { imageData } from "./components/DataComponent";
import "./index.css";
import App from "./App";
import AppClass from "./AppClass";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App data={imageData()} />
    {/* <AppClass data={imageData()} /> */}
  </React.StrictMode>
);
