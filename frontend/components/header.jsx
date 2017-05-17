import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends React.Component{

  render(){
    const HeaderNav = () => {
      return this.props.signedIn ? (
        <ul>
          <li>
            <h1>Hi {this.props.currentUser.username}!</h1>
          </li>
          <li>
            <NavLink to='/cities'>
              <button>Cities</button>
            </NavLink>
          </li>
          <li>
            <NavLink to='/'>
              <button>Dashboard</button>
            </NavLink>
          </li>
          <li>
            <button onClick={this.props.signOut}>Log Out</button>
          </li>

        </ul>
      ) : (
        <ul></ul>
      );
    };
    return (
      <nav className="header">
        <h1 className='title'>Spread the Jam</h1>
        <HeaderNav />
      </nav>
    );
  }

}


export default Header;
