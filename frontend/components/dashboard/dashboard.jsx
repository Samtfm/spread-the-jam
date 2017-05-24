import React from 'react';
import { Link } from 'react-router-dom';
import EventIndexItem from '../events/event_index_item';
import EventsContainer from '../events/events_container';

// const Dashboard = () => (
//   <div className='dashboard'></div>
//   <
// );
class Dashboard extends React.Component{
//TODO: add descriptive text / title / sidebar
  componentDidMount(){
    this.props.requestEvents(this.props.currentUser.id);
  }

  render(){
    return(
      <section className='dashboard body'>
        <div className='sidebar'>
          <h2>Welcome home, {this.props.currentUser.username}!</h2>
          <Link tabIndex="-1" to='/signup'>
            <button>Sign up for a jam!</button>
          </Link>
        </div>
        <EventsContainer events={this.props.joinedEvents}
          firstItem={() => (
            <Link tabIndex='-1' to='/new-event'>
              <button id='new-event'>Host A Jam</button>
            </Link>
          )}/>
      </section>
    );
  }
}

export default Dashboard;
