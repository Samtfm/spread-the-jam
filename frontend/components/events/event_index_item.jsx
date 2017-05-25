import React from 'react';
import {Link } from 'react-router-dom';
import { parseRubyDateTime } from '../../util/time_util';

class EventIndexItem extends React.Component{
  componentDidMount(){

  }
  constructor(props){
    super(props);
    this.dateTime = parseRubyDateTime(props.dateTime);
    this.isHost = props.userId === props.host.id;
  }
  componentWillReceiveProps(newProps){
    this.dateTime = parseRubyDateTime(newProps.dateTime);
    this.isHost = newProps.userId === newProps.host.id;
  }
  showDetail(){
    this.props.showDetail(this.props.id);
  }

  render(){


    return (
      <div className={this.isHost ? 'event-item hosted' : (this.props.attendees.some(att => att && att.id === this.props.userId) ? 'event-item joined' : 'event-item')} >
        <div className='date'>
          <div id='day'>{this.dateTime.dayString}</div>
          <div id='date'>{this.dateTime.dateString}</div>
          <div id='time'>{this.dateTime.timeString}</div>
        </div>
        <div className='host'><div id='host'>host</div><div id='name'>{this.props.host.username}</div></div>
        <ul>
          <li>{this.props.address}</li>
          <li>number attending: {this.props.numAttendees}</li>
          <li>
            <button className='white' onClick={this.showDetail.bind(this)}>Details</button>
          </li>
        </ul>
      </div>
    );
  }
}


export default EventIndexItem;
