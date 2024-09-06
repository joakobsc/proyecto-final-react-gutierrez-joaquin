import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAgikZeT3qExRmHv5XkAWXw3cS2kWybNVs",
  authDomain: "concesionaria-sm.firebaseapp.com",
  projectId: "concesionaria-sm",
  storageBucket: "concesionaria-sm.appspot.com",
  messagingSenderId: "696500113225",
  appId: "1:696500113225:web:419dfc49cf95a10e6c5498",
};

initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
