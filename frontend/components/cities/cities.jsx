import React from 'react';
import { Link } from 'react-router-dom';

class Cities extends React.Component{
  componentDidMount(){
    this.props.requestCities();
  }

  render(){
    return (
      <section className="cities">
        <h1>Set your home city</h1>
        <p>Make it easy to find events in your area</p>
        <h2>We're building our communities here</h2>
        <p>If you don't see your city, hopefully we'll expand there soon</p>
        <ul>
          {this.props.cities.map(city => (
            <Link key={city.id} tabIndex="-1" to={`/cities/${city.id}`}>
              <li style={{backgroundImage: `url(${city.imgUrl || ''})`}}>
                <button>
                  {city.name}
                </button>
              </li>
            </Link>
          ))}
        </ul>
        <div className='footer' />

      </section>
    );
  }
}
// style={{marginRight: spacing + 'em'}}
export default Cities;
