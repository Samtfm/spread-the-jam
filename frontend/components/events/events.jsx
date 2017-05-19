import React from 'react';

class Events extends React.Component{

  componentWillReceiveProps(newProps){
    console.log(this.props);
    if (this.props.city.id !== newProps.city.id){
      this.props.requestEvents(newProps.city.id);
    }
    // where do i determine the city? here or in the mapDispatchToProps?
  }

  render(){
    console.log(this.props);
    return (
      <section className='events-index'>
        <ul>
          {this.props.events.map(event => (
            <li>
              event.id
            </li>
          ))}
        </ul>

      </section>
    );
  }
}

export default Events;
