import React from 'react';
import { NavLink } from 'react-router-dom';


class Header extends React.Component{

  componentDidMount(){
    if (this.props.currentUser.cityId){
      this.props.requestCity(this.props.currentUser.cityId);
    }
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
          <li>
            <h1>Hi {this.props.currentUser.username}!</h1>
          </li>
          { this.props.currentCity.name ? (
            <li>
              <NavLink tabIndex="-1" exact to={`/cities/${this.props.currentCity.id}`}>
                <button>{this.props.currentCity.name}</button>
              </NavLink>
            </li>
          ) : ('')}
          <li>
            <NavLink tabIndex="-1" exact to='/cities'>
              <button>Cities</button>
            </NavLink>
          </li>
          <li>
            <NavLink tabIndex="-1" exact to='/'>
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
          <h1 className='title'>Spread the <span className='spread'>Jam</span></h1>
          <HeaderNav />
        </nav>
      </span>
    );
  }

}


export default Header;
