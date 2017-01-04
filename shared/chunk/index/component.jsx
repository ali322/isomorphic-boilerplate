'use strict'
import React,{Component} from "react";
import classNames from "classnames";

class Events extends Component{
    handleChange(e){
        e && e.preventDefault();
        const {changeField} = this.props;
        changeField("repo",e.target.value);
    }
    handleQuery(e){
        e && e.preventDefault();
        const {fetchRepo} = this.props;
        const {weather} = this.props.weatherByCityName;
        fetchRepo({
            cityname:weather.city
        });
    }
    render(){
        const {events,repo} = this.props;
        const classes = classNames({
            "events-content":true
        })
        return (
            <div className={classes}>
                <h3>Github Events</h3>
                <div className="events-form">
                    <input type="text" name="cityname" value={repo} onChange={this.handleChange.bind(this)}/>
                    <button onClick={this.handleQuery.bind(this)}>Query</button>
                </div>
                <div className="events">
                    {events.map(event=>(
                        <div className="event" key={event.id}>
                        <div className="event-title">
                            <img src={event.actor.avatar_url} alt=""/>
                            <span>
                            <p>{event.actor.display_login}</p>
                            <p>{event.created_at}</p>
                            </span>
                        </div>
                        <p>{event.type.replace('Event','').toLowerCase()} In <b>{event.repo.name}</b></p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Events;