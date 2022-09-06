//Core
import React from "react";
import ReactDOM from "react-dom/client";

//Helpers
import "./styles.css";

//Parts
import Todos from "./ui/containers/Todos";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Todos />
    </React.StrictMode>
);
