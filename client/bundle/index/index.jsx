import React from "react"
import ReactDOM from "react-dom"
import Index from "./module/container.jsx"

let initialState = JSON.parse(document.getElementById("initial-state").textContent)

ReactDOM.render(
    <Index initialState={initialState} />,
    document.getElementById('app')
);

if (module.hot) {
    module.hot.accept()
}
