'use strict';
import ErrorContent from "../../shared/common/error/error.jsx";
import React from "react";

function bootstrap(){
    var initialState = JSON.parse(document.getElementById("initial-state").textContent);
        React.render(<ErrorContent initialState={initialState} />,document.getElementById('error'));
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}