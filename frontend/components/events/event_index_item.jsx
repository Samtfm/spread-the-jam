import React from 'react';


class EventIndexItem extends React.Component{

  componentDidMount(){

  }

  register(){
    this.props.joinEvent({user_id: this.props.userId, event_id: this.props.id});
  }

  render(){
    const JoinLeaveButton = () => (
      this.props.attendees.includes(this.props.userId) ?
      (
        <button onClick={this.register.bind(this)}>
          JOIN
        </button>
      ) : (
        <button onClick={this.register.bind(this)}>
          LEAVE
        </button>
      )
    );
    return (
      <ul>
        <li>{this.props.dateTime}</li>
        <li>host: {this.props.host.username}</li>
        <li>number attending: {this.props.attendees.length}</li>
        <li>
          <JoinLeaveButton />
        </li>
      </ul>
    );
  }
}


export default EventIndexItem;
