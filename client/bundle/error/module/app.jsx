import React, { Component } from "react";

class Error extends Component {
    static propTypes = {
        initialState: React.PropTypes.object
    }
    render() {
        const { msg } = this.props.initialState
        return (
            <div className="error-content">
                <div className="error-layer">
                    <div className="error-panel">
                        <img src="/client/asset/image/error.png" alt="" />
                        <p>{msg}</p>
                    </div>
                </div>
            </div>
        );
    }
}

Error.defaultProps = {
    error: {
        msg: ""
    }
}

export default Error
