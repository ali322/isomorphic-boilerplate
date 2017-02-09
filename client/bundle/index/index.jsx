'use strict';
import Index from "./module/container.jsx"
import React from "react";
import ReactDOM from "react-dom";


function bootstrap() {
    var initialState = JSON.parse(document.getElementById("initial-state").textContent);
    ReactDOM.render(<Index initialState={initialState} />, document.getElementById('app'));
}

if (typeof window.addEventListener) {
    window.addEventListener("DOMContentLoaded", bootstrap);
} else {
    window.attachEvent('onload', bootstrap);
}
