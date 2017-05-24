import React from 'react';
import EventIndexItem from './event_index_item';
const EventIndex = ({events}) => (
  <section >
    <ul className='event-index'>
      {events.map(eventData => (
        <li key={eventData.id}>
          <EventIndexItem
            userId={this.props.userId}
            joinEvent={this.props.joinEvent}
            leaveEvent={this.props.leaveEvent}
            {...eventData} />
          {/*eventData.dateTime + ": " + eventData.address*/}
        </li>
      ))}
    </ul>

  </section>
);

// export default EventIndex;
