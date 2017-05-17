import React from 'react';

class Cities extends React.Component{

  componentDidLoad(){
    //TODO: load cities
  }

  render(){
    return (
      <ul className='cities'>
        {this.props.cities.map(city => (
          <li>
            city.name
          </li>
        ))}
      </ul>
    );
  }
}

export default Cities;
