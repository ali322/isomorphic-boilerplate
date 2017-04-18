import React, { Component } from "react"
import classNames from "classnames"
import { connected } from 'redux-container'
import * as actions from './action.es6'

export class Events extends Component {
    static propTypes = {
        actions: React.PropTypes.object,
        repo: React.PropTypes.string,
        events: React.PropTypes.array,
    }
    constructor(props) {
        super(props)
        this.handleQuery = this.handleQuery.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        e && e.preventDefault();
        const { changeField } = this.props.actions;
        changeField("repo", e.target.value);
    }
    handleQuery() {
        const { fetchRepo } = this.props.actions;
        fetchRepo({
            repo: this.props.repo
        })
    }
    render() {
        const { events, repo } = this.props;
        const classes = classNames({
            "events-content": true
        })
        return (
            <div className={classes}>
                <h3>Github Events</h3>
                <div className="events-form">
                    <input type="text" name="cityname" value={repo} onChange={this.handleChange} />
                    <button onClick={this.handleQuery}><i className="fa fa-search" /></button>
                </div>
                <div className="events">
                    {events.map(event=>(
                        <div className="event" key={event.id}>
                        <div className="event-title">
                            <img src={event.actor.avatar_url} alt="" />
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

export default connected(state => ({ ...state.eventsReducer }),actions)(Events)
