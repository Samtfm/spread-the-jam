import React from 'react';


class EventIndexItem extends React.Component{

  componentDidMount(){

  }

  render(){
    const JoinLeaveButton = () => (
      this.props.attendees.includes(this.props.userId) ?
      (
        <button onClick={this.props.joinEvent.bind(this, this.props.id)}>
          JOIN
        </button>
      ) : (
        <button onClick={this.props.joinEvent.bind(this, this.props.id)}>
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
