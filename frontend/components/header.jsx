import React from 'react';


class Header extends React.Component{



  render(){
    if (this.props.signedIn){
      return (
        <nav className="header">
          <ul>
            <li>
              <h1>Hi {this.props.currentUser.username}!</h1>
            </li><li>
              <button onClick={this.props.signOut}>Log Out</button>
            </li>

          </ul>
        </nav>
      );
    } else {
      return (
        <nav className="header">

        </nav>
      );
    }
  }

}


export default Header;
