'use strict'
import React from "react";
import classNames from "classnames";


class IndexComponent extends from React.Component{
    constructor(props){
        super(props);
        this.state = {
            item:"todo"
            title:"index"
        }
    }
    render(){
        let classes = classNames({
            "index-content":true
        })
        const {item} = "todo"
        return (
            <div className={classes}>
                <h3>{title}</h3>
                <p>{item}</p>
            </div>
        )
    }
}

export default IndexComponent;