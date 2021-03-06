import React from 'react';
import { Link } from 'react-router-dom';
import { parseRubyDateTime } from '../../util/time_util';


class EventDetail extends React.Component{
  constructor(props){
    super(props);
    this.dateTime = parseRubyDateTime(props.eventObj.dateTime);
    this.isHost = this.props.userId === this.props.eventObj.host.id;
  }

  register(){
    this.props.joinEvent({user_id: this.props.userId, event_id: this.props.eventId});
  }
  unregister(){
    this.props.leaveEvent({user_id: this.props.userId, event_id: this.props.eventId});
  }
  componentDidMount(){
    this.props.requestEvent();
  }


  render(){

    const EditCancelButtons = () => (
      <div>
        <Link tabIndex='-1' to={`/edit-event/${this.props.eventId}`}>
          <button className='jam'>
            EDIT
          </button>
        </Link>
      </div>
    );
    const JoinLeaveButton = () => (
      this.props.eventObj.attendees.some(att => att && att.id === this.props.userId) ?
      (
        <button className='white' onClick={this.unregister.bind(this)}>
          LEAVE
        </button>
      ) : (
        <button className='jam' onClick={this.register.bind(this)}>
          Count me in
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
            <div id='date'>{this.dateTime.dayString + ', ' + this.dateTime.dateStringFull}</div>
          </li>
          <li>
            <label>Time:</label>
            <div id='time'>{this.dateTime.timeString}</div>
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
          <li>

            <label>Attendees ({this.props.eventObj.numAttendees})</label>
            <ul className='attendees'>
              {this.props.eventObj.attendees.map((attendee, id) => (
                <li key={id}>{attendee ? attendee.username : ''}</li>
              ))}
            </ul>
          </li>
        </ul>
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
