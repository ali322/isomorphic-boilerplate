'use strict'
import IndexComponent from "../../shared/index/component.jsx";

if(typeof window !== 'undefined'){
    document.addEventListener('DOMContentLoaded',function(){
        var initialData = JSON.parse(document.getElementById("initial-data").textContent);
        React.render(<IndexComponent initialData={initialData} />,document.body);
    });
}
