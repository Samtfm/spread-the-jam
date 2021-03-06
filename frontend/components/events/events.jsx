import React from 'react';
// import EventIndexItemContainer from './event_index_item_container';
import EventIndexItem from './event_index_item';
import Modal from 'react-modal';
import EventDetailContainer from './event_detail_container';

class Events extends React.Component{

  constructor(props){
    super(props);
    this.state = {detailShowing: false};
  }
  componentWillMount(){
    Modal.setAppElement('body');
  }
  showDetail(eventId){
    this.setState({ detailShowing: true, detailId: eventId });
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
        <Modal
          isOpen={this.state.detailShowing}
          overlayClassName='modal-overlay'
          className='event-detail'
          shouldCloseOnOverlayClick={true}
          onRequestClose={this.hideDetail.bind(this)}
          contentLabel="Event Details">

            <button className='white close' onClick={this.hideDetail.bind(this)}>×</button>
            <EventDetailContainer eventId={this.state.detailId} />

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
                showDetail={this.showDetail.bind(this)}
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
