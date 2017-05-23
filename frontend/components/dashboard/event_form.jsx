 import React from 'react';

class EventForm extends React.Component{
  render(){
    return (
      <form className="event-form body">
        <label>
          description
          <textarea>
          </textarea>
        </label>
        <label>
          Address
          <input type='text' />
        </label>
        <label>
          Date
          <input type='date'/>
        </label>
        <label>
          Time
          <input type='time' />
        </label>

      </form>
    );
  }
}

export default EventForm;
