import React from 'react';


class EventIndexItem extends React.Component{

  componentDidMount(){

  }

  register(){
    this.props.joinEvent({user_id: this.props.userId, event_id: this.props.id});
  }
  unregister(){
    this.props.leaveEvent({user_id: this.props.userId, event_id: this.props.id});
    // this.props.leaveEvent({user_id: this.props.userId, event_id: this.props.id});
  }

  render(){
    const JoinLeaveButton = () => (
      this.props.attendees[this.props.userId] ?
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
      <ul>
        <li>{this.props.dateTime}</li>
        <li>host: {this.props.host.username}</li>
        <li>number attending: {Object.keys(this.props.attendees).length}</li>
        <li>
          <JoinLeaveButton />
        </li>
      </ul>
    );
  }
}


export default EventIndexItem;
