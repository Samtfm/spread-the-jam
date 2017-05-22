import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';
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
        <ul>
          {this.props.joinedEvents.map(eventObj => (
            <li key={eventObj.id}>
              <EventIndexItem {...eventObj} />
            </li>
          ))}
        </ul>
        <h2>Hosted Events</h2>
        <ul>
          {this.props.hostedEvents.map(eventObj => (
            <li key={eventObj.id}>
              <EventIndexItem {...eventObj} />
            </li>
          ))}
        </ul>

      </section>
    );
  }
}

export default Dashboard;
