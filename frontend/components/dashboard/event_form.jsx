import React from 'react';

class EventForm extends React.Component{
  render(){
    return (
      <form className="event-form">
        <label>
          description
          <textarea>

          </textarea>
        </label>
      </form>
    );
  }
}

export default EventForm;
