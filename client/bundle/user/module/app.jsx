import React, { Component } from 'react'
import { connected } from 'redux-container'
import * as actions from './action.es6'

export class User extends Component {
    static propTypes = {
        user: React.PropTypes.object
    }
    render() {
        const { user } = this.props
        if (!user) {
            return null
        }
        return (
            <div className="user-container common-container">
                <h3><button onClick={()=>history.back()}>&lt;</button>{user.id}</h3>
                <div className="user-title">
                    <img src={user.avatar_url} alt="" />
                    <span>
                    <p>{user.login}</p>
                    <p>{user.created_at}</p>
                    </span>
                </div>
            </div>
        )
    }
}

export default connected(state => ({ ...state.userReducer }), actions)(User)
