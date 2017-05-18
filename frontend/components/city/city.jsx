import React from 'react';

class City extends React.Component{

  componentDidMount(){
    //TODO:load relevant events, load city
  }

  render(){
    return (
      <section className="city">
        <section className="banner"
           style={{backgroundImage: `url(${this.props.city.imgUrl})`}}>
           <h1>{this.props.city.name}</h1>
        </section>
        <ul>
          <li>
            event 1
          </li>
          <li> event 5</li>
        </ul>
      </section>
    );
  }
}
export default City;
