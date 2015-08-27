'use strict'
import IndexComponent from "../../shared/index/component.jsx";

function bootstrap(){
    var initialState = JSON.parse(document.getElementById("initial-state").textContent);
        React.render(<GoodList initialState={initialState} />,document.body);
}

if(typeof window.addEventListener){
    window.addEventListener("DOMContentLoaded",bootstrap);
}else{
    window.attachEvent('onload',bootstrap);
}
