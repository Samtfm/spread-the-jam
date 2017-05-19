import React from 'react';
import EventIndexItemContainer from './event_index_item_container';

class Events extends React.Component{

  componentDidMount(){
    console.log("hey");
    this.props.requestEvents(this.props.cityId);
  }
  componentWillReceiveProps(newProps){
    console.log('props');
    if (this.props.cityId !== newProps.cityId){
      this.props.requestEvents(newProps.cityId);
    }
    // where do i determine the city? here or in the mapDispatchToProps?
  }

  render(){
    console.log(this.props);

    return (
      <section className='events-index'>
        <ul>
          {this.props.events.map(eventData => (
            <li>
              <EventIndexItemContainer />
              {event.dateTime + ": " + event.address}
            </li>
          ))}
        </ul>

      </section>
    );
  }
}

export default Events;
