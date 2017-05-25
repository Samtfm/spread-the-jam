import React from 'react';
import { Modal } from 'react-modal';
import { Link } from 'react-router-dom';

class EventDetail extends React.Component{
  constructor(props){
    super(props);
    const date = new Date(this.props.eventObj.dateTime);
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    const MONTHS = "January February March April May June July August September October November December".split(' ');

    this.day = DAYS[date.getDay()];
    this.date = MONTHS[date.getMonth()] + ' ' + date.getDate();
    this.time = date.toLocaleTimeString().match( /(\S*)\S{3}\s(\S\S)/).slice(1, 3).join(" ");
    this.isHost = this.props.userId === this.props.eventObj.host.id;
  }

  register(){
    this.props.joinEvent({user_id: this.props.userId, event_id: this.props.eventId});
  }
  unregister(){
    this.props.leaveEvent({user_id: this.props.userId, event_id: this.props.eventId});
  }

  render(){

    const EditCancelButtons = () => (
      <div>
        <Link tabIndex='-1' to={`/edit-event/${this.props.eventId}`}>
          <button >
            EDIT
          </button>
        </Link>
      </div>
    );

    const JoinLeaveButton = () => (
      this.props.eventObj.attendees[this.props.userId] ?
      (
        <button onClick={this.unregister.bind(this)}>
          LEAVE
        </button>
      ) : (
        <button onClick={this.register.bind(this)}>
          JOIN
        </button>
      )
    );

    return (
      <section>
        <ul>
          <li>
            <label>Host:</label>
            <div>{this.props.eventObj.host.username}</div>
          </li>
          <li>
            <label>Date:</label>
            <div id='date'>{this.day + ', ' + this.date}</div>
          </li>
          <li>
            <label>Time:</label>
            <div id='time'>{this.time}</div>
          </li>
          <li>
            <label>Address:</label>
            <div> {this.props.eventObj.address}</div>
          </li>
          <li>
            <label>Description:</label>
            <p>
              {this.props.eventObj.description}
            </p>
          </li>
          <li>number attending: {this.props.eventObj.numAttendees}</li>
        </ul>
        {/*<ul className='attendees'>
          <h3>attendees</h3>
          {this.props.eventObj.attendees.map(attendee => (
            <li>{attendee.username}</li>
          ))}
        </ul>*/}
        {this.isHost ? (
          <EditCancelButtons />
        ) : (
          <JoinLeaveButton />
        )}
      </section>
    );
  }
}

export default EventDetail;
