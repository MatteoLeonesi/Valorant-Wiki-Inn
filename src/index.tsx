import React from "react";
import ReactDOM from "react-dom";
import "./styles/tailwind.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

//pages & Components
import About from "./pages/About";
import Navbar from "./components/navbar";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="./pages/About" element={<About />} />
        </Routes>
    </BrowserRouter>,
    rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
