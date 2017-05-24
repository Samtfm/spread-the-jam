import React from 'react';
// import EventIndexItemContainer from './event_index_item_container';
import EventIndexItem from './event_index_item';
import Modal from 'react-modal';

class Events extends React.Component{

  constructor(props){
    super(props);
    this.state = {detailShowing: false};
  }
  componentWillMount(){
    Modal.setAppElement('body');
  }
  showDetail(){
    this.setState({ detailShowing: true });
  }
  hideDetail(){
    this.setState({ detailShowing: false });
  }
  // componentWillReceiveProps(newProps){
  //   // if (this.props.cityId !== newProps.cityId){
  //   //   this.props.requestEvents(newProps.cityId);
  //   // }
  //   // where do i determine the city? here or in the mapDispatchToProps?
  // }

  render(){
    return (
      <section className='event-index'>
        <button onClick={this.showDetail.bind(this)}>HEHY THERE</button>
        <Modal
          isOpen={this.state.detailShowing}
          contentLabel="Modal">
          <button onClick={this.hideDetail.bind(this)}>HEHY THERE</button>
        </Modal>
        <ul >
          {this.props.firstItem ? (
            <li>
              <this.props.firstItem />
            </li>
          ) : ('')}
          {this.props.events.map(eventData => (
            <li key={eventData.id}>
              <EventIndexItem
                userId={this.props.userId}
                joinEvent={this.props.joinEvent}
                leaveEvent={this.props.leaveEvent}
                {...eventData} />
              {/*eventData.dateTime + ": " + eventData.address*/}
            </li>
          ))}
        </ul>

      </section>
    );
  }
}

export default Events;
