import React from 'react';
import { Modal } from 'react-modal';


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
        {/*<Link tabIndex='-1' to={`/edit-event/${this.props.id}`}>
          <button >
            EDIT
          </button>
        </Link>*/}
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
            <div className='date'>
              <div id='date'>{this.day + ', ' + this.date}</div>
              <div id='time'>{this.time}</div>
            </div>
          </li>
          <li>
            host: {this.props.eventObj.host.username}
          </li>
          <li>Address: {this.props.eventObj.address}</li>
          <li>
            description: <p>
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
