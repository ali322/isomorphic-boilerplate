import React, { Component } from "react"
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
        return (
            <div className="common-container">
                <div className="panel panel-default">
                <div className="panel-heading">Github Events</div>
                <div className="panel-body">
                    <div className="input-group">
                        <input type="text" className="form-control" value={repo} onChange={this.handleChange} />
                        <span className="input-group-addon" onClick={this.handleQuery}><i className="fa fa-search" /></span>
                    </div>
                </div>
                <div className="events">
                    {events.map(event=>(
                        <div className="event" key={event.id}>
                        <div className="event-title">
                            <img src={event.actor.avatar_url} alt="" />
                            <span>
                            <p><a href={'user/'+ event.actor.display_login}>{event.actor.display_login}</a></p>
                            <p>{event.created_at}</p>
                            </span>
                        </div>
                        <p>{event.type.replace('Event','').toLowerCase()} In <b>{event.repo.name}1</b></p>
                        </div>
                    ))}
                </div>
                </div>
            </div>
        )
    }
}

export default connected(state => ({ ...state.eventsReducer }), actions)(Events)
