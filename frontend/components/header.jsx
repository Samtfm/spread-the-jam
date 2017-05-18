import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends React.Component{

  componentDidMount(){
    if (this.props.currentUser && this.props.currentUser.cityId){
      this.props.requestCity(this.props.currentUser.cityId);
    }
  }

  render(){
    const HeaderNav = () => {
      return this.props.signedIn ? (
        <ul>
          <li>
            <h1>Hi {this.props.currentUser.username}!</h1>
          </li>
          { this.props.currentCity !== undefined ? (
            <li>
              <NavLink to={`/cities/${this.props.currentCity.id}`}>
                <button>{this.props.currentCity.name}</button>
              </NavLink>
            </li>
          ) : ('')}
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
      <span className="header">
        <nav>
          <h1 className='title'>Spread the Jam</h1>
          <HeaderNav />
        </nav>
      </span>
    );
  }

}


export default Header;
