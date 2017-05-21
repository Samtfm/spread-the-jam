import React from 'react';
import { Link } from 'react-router-dom';

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
      </section>
    );
  }
}

export default Dashboard;
