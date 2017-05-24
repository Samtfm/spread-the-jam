import React from 'react';
import { Link } from 'react-router-dom';

class Cities extends React.Component{
//TODO: add text prompting you to choose a city to select as home
  componentDidMount(){
    this.props.requestCities();
  }

  render(){
    return (
      <section className="cities">

        {/*<div className="banner">
          <div className="banner-image"
            style={{backgroundImage: `url(${'https://linkablenetworks.com/wp-content/themes/linkablenetworks/library/images/svg/logo-mark.svg'})`}}>hi</div>
          <div className='banner-content'>
            <h1>{'where are ya?'}</h1>
          </div>
        </div>*/}
        <h1>Set your home city</h1>
        <p>Make it easy to find events in your area</p>
        <h2>We're building our communities here</h2>
        <p>If you don't see your city, hopefully we'll expand there soon</p>
        <ul>
          {this.props.cities.map(city => (
            <Link key={city.id} tabIndex="-1" to={`/cities/${city.id}`}>
              <li style={{backgroundImage: `url(${city.imgUrl})`}}>
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
