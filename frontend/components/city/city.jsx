import React from 'react';
import EventsContainer from '../events/events_container';

class City extends React.Component{

  componentDidMount(){
    this.props.requestCity();
    this.props.requestEvents();
  }

  chooseCity(){
    const userId = this.props.currentUser.id;
    const cityId = this.props.city.id;
    this.props.updateUser({ id: userId , city_id: cityId });
  }
  componentWillReceiveProps(newProps){
    if (newProps.cityId && newProps.cityId !== this.props.cityId){
      newProps.requestCity();
      newProps.requestEvents();
    }
  }

  render(){
    const isHomeCity = this.props.currentUser.cityId === this.props.city.id;
    return (
      <section className="city">
        <div className="banner">
          <div className="banner-image"
           style={{backgroundImage: `url(${this.props.city.imgUrl})`}}></div>
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

        <div  className='body'>
          <EventsContainer events={this.props.events} />
        </div>

      </section>
    );
  }
}
export default City;
