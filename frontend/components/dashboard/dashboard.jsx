import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';
import EventsContainer from '../events/events_container';

// const Dashboard = () => (
//   <div className='dashboard'></div>
//   <
// );
class Dashboard extends React.Component{

  render(){
    return(
      <section className='dashboard'>
        <Link tabIndex='-1' to='/new-event'>
          <button>Host A Jam</button>
        </Link>
        <h2>Joined Events</h2>
        <EventsContainer events={this.props.joinedEvents} />
        <h2>Hosted Events</h2>
        <EventsContainer events={this.props.hostedEvents} />        
      </section>
    );
  }
}

export default Dashboard;
