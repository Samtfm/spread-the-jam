import React from 'react';

class Events extends React.Component{

  componentDidMount(){
    this.props.requestEvents();
    // where do i determine the city? here or in the mapDispatchToProps?
  }

  render(){
    console.log(this.props.events);
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
