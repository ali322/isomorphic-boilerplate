import React from "react";
import ReactDOM from "react-dom";
import User from "./module/container.jsx";

function bootstrap() {
    let initialState = JSON.parse(document.getElementById("initial-state").textContent);
    ReactDOM.render(<User initialState={initialState} />, document.getElementById('app'));
}

if (typeof window.addEventListener) {
    window.addEventListener("DOMContentLoaded", bootstrap);
} else {
    window.attachEvent('onload', bootstrap);
}
