import React from 'react';

class City extends React.Component{

  componentDidMount(){
    this.props.requestCity();
  }

  chooseCity(){
    const userId = this.props.currentUser.id;
    const cityId = this.props.match.params.id;
    this.props.updateUser({ id: userId , city_id: cityId });
  }

  render(){
    return (
      <section className="city">
        <section className="banner"
           style={{backgroundImage: `url(${this.props.city.imgUrl})`}}>
           <h1>{this.props.city.name}</h1>
           <button onClick={this.chooseCity.bind(this)}>
             Set as my home city
           </button>
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
