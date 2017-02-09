'use strict'
import React, { Component } from "react"
import classNames from "classnames"
import {connected} from 'redux-container'
import * as actions from './action.es6'

@connected(actions,state=>({...state.eventsReducer}))
class Events extends Component {
    handleChange(e) {
        e && e.preventDefault();
        const { changeField } = this.props;
        changeField("repo", e.target.value);
    }
    handleQuery(e) {
        console.log('handleQuery')
        // e && e.preventDefault();
        // const { fetchRepo } = this.props;
        // fetchRepo({
        //     repo:this.props.repo
        // });
    }
    render() {
        const { events, repo,flag } = this.props;
        const classes = classNames({
            "events-content": true
        })
        return (
            <div className={classes}>
                <h3>Github Events</h3>
                <div className="events-form">
                    <input type="text" name="cityname" value={repo} onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleQuery.bind(this)}><i className="fa fa-search"/></button>
                </div>
                <div className="events">
                    {events.map(event=>(
                        <div className="event" key={event.id}>
                        <div className="event-title">
                            <img src={event.actor.avatar_url} alt=""/>
                            <span>
                            <p><a href={`/user/${event.actor.display_login}`}>{event.actor.display_login}</a></p>
                            <p>{event.created_at}</p>
                            </span>
                        </div>
                        <p>{event.type.replace('Event','').toLowerCase()} In <b>{event.repo.name}1</b></p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Events
