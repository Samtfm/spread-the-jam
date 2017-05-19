import React from 'react';

class City extends React.Component{

  componentDidMount(){
    this.props.requestCity();
  }

  chooseCity(){
    const userId = this.props.currentUser.id;
    const cityId = this.props.city.id;
    this.props.updateUser({ id: userId , city_id: cityId });
  }

  render(){
    const isHomeCity = this.props.currentUser.cityId === this.props.city.id;
    return (
      <section className="city">
        <div className="banner">
          <div className="banner-image"
           style={{backgroundImage: `url(${this.props.city.imgUrl})`}} />
           <div className='banner-content'>
             <h1>{this.props.city.name}</h1>

             { isHomeCity ? (
               ''
             ) : (
               <button onClick={this.chooseCity.bind(this)}>
                 Set as my home city
               </button>
             )}
           </div>
         </div>
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