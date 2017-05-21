import React from 'react';
import { Link } from 'react-router-dom';

class Cities extends React.Component{

  componentDidMount(){
    this.props.requestCities();
  }

  render(){
    return (
      <section className="cities">
        <h2>Where are ya?</h2>
        <ul>
          {this.props.cities.slice(0,3).map(city => (
            <Link tabIndex="-1" to={`/cities/${city.id}`}>
              <li style={{backgroundImage: `url(${city.imgUrl})`}}>
                <button>
                  {city.name}
                </button>
              </li>
            </Link>
          ))}
        </ul>
        <ul>
          {this.props.cities.slice(3,6).map(city => (
          <Link tabIndex="-1" to={`/cities/${city.id}`}>
            <li style={{backgroundImage: `url(${city.imgUrl})`}}>
              <button>
                {city.name}
              </button>
            </li>
          </Link>
          ))}
        </ul>
      </section>
    );
  }
}
// style={{marginRight: spacing + 'em'}}
export default Cities;
