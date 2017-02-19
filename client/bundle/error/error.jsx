import React from "react";
import ReactDOM from "react-dom";
import Error from "./module/app.jsx"

if (module.hot) {
    module.hot.accept()
}

function bootstrap() {
    let initialState = JSON.parse(document.getElementById("initial-state").textContent);
    ReactDOM.render(<Error initialState={initialState} />, document.getElementById('app'));
}

if (typeof window.addEventListener) {
    window.addEventListener("DOMContentLoaded", bootstrap);
} else {
    window.attachEvent('onload', bootstrap);
}
