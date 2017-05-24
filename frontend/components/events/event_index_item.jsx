import React from 'react';
import {Link } from 'react-router-dom';

class EventIndexItem extends React.Component{
//TODO: create modal thing to show description
//TODO: change button to display modal, add join/leave/edit buttons to modal
  componentDidMount(){

  }
  constructor(props){
    super(props);
    const date = new Date(this.props.dateTime);
    const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
    // const MONTHS = "January February March April May June July August September October November December".split(' ');
    const MONTHS = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(' ');

    this.day = DAYS[date.getDay()];
    this.date = MONTHS[date.getMonth()] + ' ' + date.getDate();
    this.time = date.toLocaleTimeString().match( /(\S*)\S{3}\s(\S\S)/).slice(1, 3).join(" ");

    const isHost = this.props.userId === this.props.host.id;
  }

  showDetail(){
    this.props.showDetail(this.props.id);
  }

  render(){


    return (
      <div className={this.isHost ? 'event-item hosted' : 'event-item'} >
        <div className='date'>
          <div id='day'>{this.day}</div>
          <div id='date'>{this.date}</div>
          <div id='time'>{this.time}</div>
        </div>
        <div className='host'><div id='host'>host</div><div id='name'>{this.props.host.username}</div></div>
        <ul>
          <li>{this.props.address}</li>
          <li>number attending: {this.props.numAttendees}</li>
          <li>
            <button onClick={this.showDetail.bind(this)}>Details</button>
          </li>
        </ul>
      </div>
    );
  }
}


export default EventIndexItem;
