import React from "react"
import ReactDOM from "react-dom"
import Error from "./app.jsx"
import "../common/responsive"

if (module.hot) {
    module.hot.accept()
}

let initialState = JSON.parse(document.getElementById("initial-state").textContent)

ReactDOM.render(
    <Error initialState={initialState} />,
    document.getElementById('app')
)
