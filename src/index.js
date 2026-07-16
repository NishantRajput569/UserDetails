import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
/*import Home from "./Home";*/
/*import MainComponent from "./MainComponent";*/
import UserForm from "./userForm"; 
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
   
    <UserForm/>
  </React.StrictMode>
);

reportWebVitals();