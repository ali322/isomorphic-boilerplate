import React from 'react'
import PropTypes from 'prop-types'

const Error = ({ initialState }) => (
    <div className="container error">
        <p>{initialState.msg}</p>
        <button onClick={()=>window.history.back()}>Back</button>
    </div>
)

Error.propTypes = {
    initialState: PropTypes.object
}

export default Error
