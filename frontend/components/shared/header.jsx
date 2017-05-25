import React from 'react';
import { NavLink, Link } from 'react-router-dom';


class Header extends React.Component{
//TODO: add host event button to header??
//TODO: Add cute little logo or something
//TODO: add logo as the little page icon thing
  componentDidMount(){
    // if (this.props.currentUser.cityId){
    //   this.props.requestCity(this.props.currentUser.cityId);
    // }
  }
  componentWillReceiveProps(newProps){
    // if (newProps.currentUser.cityId && !(newProps.currentCity.name)){
    //   this.props.requestCity(newProps.currentUser.cityId);
    // }
  }

  render(){
    const HeaderNav = () => {
      return this.props.signedIn ? (
        <ul>
          { this.props.currentCity.name ? (
            <li>
              <NavLink tabIndex="-1" exact to={`/cities/${this.props.currentCity.id}`}>
                <button className='nav'>{this.props.currentCity.name}</button>
              </NavLink>
            </li>
          ) : ('')}
          <li>
            <NavLink tabIndex="-1" exact to='/cities'>
              <button className='nav'>Cities</button>
            </NavLink>
          </li>
          <li>
            <NavLink tabIndex="-1" exact to='/new-event'>
              <button className='nav'>Host</button>
            </NavLink>
          </li>
          <li>
            <NavLink tabIndex="-1" exact to='/dashboard'>
              <button className='nav'>Dashboard</button>
            </NavLink>
          </li>
          <li>
            <button className='nav' onClick={this.props.signOut}>Log Out</button>
          </li>

        </ul>
      ) : (
        <ul>
          <li>
            <NavLink tabIndex="-1" exact to={`/signup`}>
              <button className='nav'>Sign Up</button>
            </NavLink>
            <NavLink tabIndex="-1" exact to={`/signin`}>
              <button className='login'>Log In</button>
            </NavLink>
          </li>
        </ul>
      );
    };
    return (
      <span className="header">
        <nav>
          <Link className='title'
            tabIndex="-1" to='/'>
            <h1>Spread the&nbsp;Jam</h1>
          </Link>

          <HeaderNav />
        </nav>
      </span>
    );
  }

}


export default Header;
