import React from "react"
import ReactDOM from "react-dom"
import Detail from "./container.jsx"
import "../common/responsive"

if (module.hot) {
    module.hot.accept()
}

let initialState = JSON.parse(document.getElementById("initial-state").textContent)

ReactDOM.render(
    <Detail initialState={initialState} />,
    document.getElementById('app')
)
