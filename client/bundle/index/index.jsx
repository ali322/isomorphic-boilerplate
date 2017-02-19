import React from "react";
import ReactDOM from "react-dom";
import Index from "./module/container.jsx"

if (module.hot) {
    module.hot.accept()
}

function bootstrap() {
    let initialState = JSON.parse(document.getElementById("initial-state").textContent);
    ReactDOM.render(<Index initialState={initialState} />, document.getElementById('app'));
}

if (typeof window.addEventListener) {
    window.addEventListener("DOMContentLoaded", bootstrap);
} else {
    window.attachEvent('onload', bootstrap);
}
