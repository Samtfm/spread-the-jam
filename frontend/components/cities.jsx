import React from 'react';

class Cities extends React.Component{

  componentDidMount(){
    this.props.requestCities();
  }

  render(){
    console.log(this.props.cities);
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
