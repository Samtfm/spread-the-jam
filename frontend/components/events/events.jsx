import React from 'react';
import EventIndexItemContainer from './event_index_item_container';

class Events extends React.Component{

  componentDidMount(){
    this.props.requestEvents(this.props.cityId);
  }
  componentWillReceiveProps(newProps){
    if (this.props.cityId !== newProps.cityId){
      this.props.requestEvents(newProps.cityId);
    }
    // where do i determine the city? here or in the mapDispatchToProps?
  }

  render(){
    return (
      <section className='events-index'>
        <ul>
          {this.props.events.map(eventData => (
            <li>
              {eventData.dateTime + ": " + eventData.address}
            </li>
          ))}
        </ul>

      </section>
    );
  }
}

export default Events;
