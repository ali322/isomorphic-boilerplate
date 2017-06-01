import React from "react"
import ReactDOM from "react-dom"
import Index from "./container.jsx"
import "../common/responsive"

if (module.hot) {
    module.hot.accept()
}

let initialState = JSON.parse(document.getElementById("initial-state").textContent)

ReactDOM.render(
    <Index initialState={initialState} />,
    document.getElementById('app')
)

