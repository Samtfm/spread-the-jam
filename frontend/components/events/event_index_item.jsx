import React from 'react';


class EventIndexItem extends React.Component{

  componentDidMount(){

  }

  render(){
    return (
      <ul>
        <li>{this.props.dateTime}</li>
        <li>{this.props.host}</li>
      </ul>
    );
  }
}


export default EventIndexItem;
