'use strict';

import React from "react"
import ReactDOMServer from "react-dom/server"
import reqwest from "reqwest"

export function markupForComponent(RenderComponent,props={}){
    return ReactDOMServer.renderToString(<RenderComponent {...props}/>)
}

export function apiRequest(url){
    return fetch(url).then(ret=>ret.json());
}