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
      <section>
        <div className="banner welcome">
          <div className="banner-image"
            style={{backgroundImage: `url(${'http://res.cloudinary.com/samtfm/image/upload/v1495688254/microphone-354070_1920_f9j5dh.jpg'})`}}></div>
          <div className='banner-content'>
            <h2>Welcome home, {this.props.currentUser.username}!</h2>
            <Link tabIndex="-1" to='/signup'>
              <button>Sign up for a jam!</button>
            </Link>
          </div>
        </div>
        <div className='dashboard body'>
          <h2>Upcoming Events</h2>
        <EventsContainer events={this.props.joinedEvents}
          firstItem={() => (
            <Link tabIndex='-1' to='/new-event'>
              <button id='new-event'>Host A Jam</button>
            </Link>
          )}/>
        </div>
      </section>
    );
  }
}

export default Dashboard;
