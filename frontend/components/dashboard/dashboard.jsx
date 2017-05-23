import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';
import EventsContainer from '../events/events_container';

// const Dashboard = () => (
//   <div className='dashboard'></div>
//   <
// );
class Dashboard extends React.Component{

  componentDidMount(){
    this.props.requestEvents(this.props.currentUser.id);
  }

  render(){
    return(
      <section className='dashboard body'>
        <Link tabIndex='-1' to='/new-event'>
          <button>Host A Jam</button>
        </Link>
        <h2>Hi {this.props.currentUser.username}!</h2>
        <EventsContainer events={this.props.joinedEvents} />
      </section>
    );
  }
}

export default Dashboard;
