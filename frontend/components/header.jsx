import React from 'react';


class Header extends React.Component{



  render(){
    if (this.props.signedIn){
      return (
        <nav className="header">
          <h1>Hi {this.props.currentUser.username}!</h1>
          <button onClick={this.props.signOut}>Log Out</button>
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
