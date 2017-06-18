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
    const isAttending = this.props.attendees.some(att => att && att.id === this.props.userId);
    const Label = () => (
      this.isHost ? (
      <div className='label'>
        Hosting
      </div>
      ) : (
        isAttending ?(
          <div className='label'>
            Attending
          </div>
        ) : (
          <div></div>
        )
      )
    );
    const blurb = (
      this.props.description.length > 60 ?
      this.props.description.slice(0, 57) + "..." :
      this.props.description
    );
    return (
        <div onClick={this.showDetail.bind(this)} className={this.isHost ? 'event-item hosted' : (isAttending ? 'event-item joined' : 'event-item')} >
          <div className='date'>
            <div id='day'>{this.dateTime.dayString}</div>
            <div id='date'>{this.dateTime.dateString}</div>
            <div id='time'>{this.dateTime.timeString}</div>
          </div>
          <Label />
          <div className='host'><div id='host'>host</div><div id='name'>{this.props.host.username}</div></div>
          <ul>
            <li>Attending: {this.props.numAttendees}</li>
            <li> {blurb}</li>
            <li>
            </li>
          </ul>
        </div>
    );
  }
}


export default EventIndexItem;
