'use strict';

import React,{Component} from "react";

class Error extends Component{
    render(){
        const {msg} = this.props.initialState
        return (
            <div className="error-content">
                <div className="error-layer">
                    <div className="error-panel">
                        <img src="/client/asset/image/error.png"/>
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Error.defaultProps = {
    error:{
        msg:""
    }
}

export default Error
