 import React from 'react';

class EventForm extends React.Component{
//TODO: ADD DROPDOWN TO CHOOSE EVENT CITY
  constructor(props){
    const date = new Date(Date.now()).toDateString();
    super(props);
    this.state = { description: '', address: '', date: '', time: '12:00', cityId: this.props.cityId || this.props.cities[0].id};
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }
  componentDidMount(){
    this.props.requestCities();
    if (this.props.edit) {
      this.props.requestEvent();
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
      date_time: rubyDateTime
    };
    this.props.createEvent(eventObj);
  }

  updateDescription(e) {
    e.preventDefault();
    this.setState({ description: e.target.value });
  }
  updateAddress(e) {
    e.preventDefault();
    this.setState({ address: e.target.value });
  }
  updateDate(e) {
    e.preventDefault();
    this.setState({ date: e.target.value });
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
      <form className="event-form body">
        <ul className='errors'>
          {this.props.errors ?
          (this.props.errors.map((err) => <li>{err}</li>)) : ''}
        </ul>
        <label>
          Date
          <input type='date'
            value={this.state.date}
            onChange={this.updateDate.bind(this)} />
        </label>
        <label>
          Time
          <input type='time'
            value={this.state.time}
            onChange={this.updateTime.bind(this)} />
        </label>
        <label>
          Address
          <input type='text'
            onChange={this.updateAddress.bind(this)} />
        </label>
        <label>
          City
          <select value={this.state.cityId} onChange={this.updateCity.bind(this)}>
            {this.props.cities.map(city => (
              <option value={city.id}>{city.name}</option>
            ))};
          </select>
        </label>

        <label>
          description
          <textarea onChange={this.updateDescription.bind(this)} value={this.state.description}>
          </textarea>
        </label>


        <button onClick={this.submit.bind(this)}>
          Create Jam
        </button>
      </form>
    );
  }
}

export default EventForm;
