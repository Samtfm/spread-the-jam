 import React from 'react';
 import Modal from 'react-modal';
import DateTime from 'react-datetime';
import moment from 'moment';

class EventForm extends React.Component{
  constructor(props){
    const date = new Date(Date.now()).toDateString();
    super(props);
    this.state = {
      id: null,
      description: '',
      address: '',
      date: '',
      time: '12:00',
      cityId: this.props.cityId,
      displayConfirmDelete: false,
      dateTime: null
    };
  }
  componentWillMount(){
    Modal.setAppElement('body');
  }
  componentWillUnmount(){
    this.props.clearErrors();
  }
  componentDidMount(){
    this.props.requestCities();
    if (this.props.edit) {
      this.props.requestEvent().fail(() => this.props.history.push('/'));
    }
  }

  componentWillReceiveProps(newProps){
    if (newProps.eventObj){
      this.setState({
        description: newProps.eventObj.description,
        address: newProps.eventObj.address,
        cityId: newProps.eventObj.cityId,
        id: newProps.eventObj.id,
        dateTime: moment(newProps.eventObj.dateTime).utc()
      });

    }
  }

  submit(){
    const rubyDateTime = (this.state.date) ?
    this.state.date + 'T' + this.state.time + ':00.000Z' : null;
    const eventObj = {
      address: this.state.address,
      description: this.state.description,
      city_id: this.state.cityId,
      host_id: this.props.userId,
      date_time: this.state.dateTime.format(),
      id: this.state.id
    };
    if (this.props.edit){
      this.props.updateEvent(eventObj);
    } else {
      this.props.createEvent(eventObj);
    }
  }
  deleteEvent(){
    this.props.deleteEvent();
  }

  updateDescription(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }
  updateAddress(e) {
    e.preventDefault();
    this.setState({ address: e.target.value });
  }
  updateDate(m) {
    console.log(m.format());
    this.setState({ dateTime: m });
  }
  updateTime(e) {
    e.preventDefault();
    this.setState({ time: e.target.value });
  }
  updateCity(e) {
    e.preventDefault();
    this.setState({ cityId: e.target.value });
  }

  render(){
    return (
      <div>

      <div className="banner">
        <div className="banner-image"
         style={{backgroundImage: `url('http://res.cloudinary.com/samtfm/image/upload/c_crop,g_south,h_709,w_1920,x_0,y_0/v1495688255/studio.jpg')`}}></div>
         <div className='banner-content'>
           <div className='banner-text'>
             <h2>Host a Jam!</h2>
           </div>
        </div>
      </div>
      <section className='new-event body'>


      <form className="event-form">
        <h2 className='body-title'>{this.props.edit ? 'Update the deets!' : 'What are the deets?'}</h2>
        <ul className='errors'>
          {this.props.errors ?
          (this.props.errors.map((err) => <li>{err}</li>)) : ''}
        </ul>
        <label className='date-time-picker'>
          Date/Time
          <DateTime value={this.state.dateTime} onChange={this.updateDate.bind(this)} />
          {/*}
          <input type='date'
            value={this.state.date}
            onChange={this.updateDate.bind(this)} />*/}
        </label>
        <label>
          Address
          <input type='text'
            value={this.state.address}
            onChange={this.updateAddress.bind(this)} />
        </label>
        <label>
          City
          <select value={this.state.cityId} onChange={this.updateCity.bind(this)}>
            {this.props.cities.map((city, id) => (
              <option key={id} value={city.id}>{city.name}</option>
            ))};
          </select>
        </label>
        <label>
          Description
          <textarea onChange={this.updateDescription.bind(this)} value={this.state.description}>
          </textarea>
        </label>

        {this.props.edit ? (
        <div className='buttons'>
          <button className='white' onClick={() => this.setState({displayConfirmDelete: true})}>
            Delete Jam
          </button>
          <button className='jam' onClick={this.submit.bind(this)}>
            Update Jam
          </button>
          <Modal
            isOpen={this.state.displayConfirmDelete}
            className='modal delete-warning'
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => this.setState({displayConfirmDelete: false})}
            contentLabel="Are you sure?">
            <h2> Are you sure you want to delete this jam?</h2>
            <div>
              <button className='white' onClick={() => this.setState({displayConfirmDelete: false})}>
                no
              </button>
              <button className='jam' onClick={this.deleteEvent.bind(this)}>
                yes
              </button>
            </div>
          </Modal>
        </div>
        ):(
          <button className='jam' onClick={this.submit.bind(this)}>
            Create Jam
          </button>
        )}
      </form>
    </section>
    </div>
    );
  }
}

export default EventForm;
