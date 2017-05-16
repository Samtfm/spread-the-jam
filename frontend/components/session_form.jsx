import React from 'react';

class SessionForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {username: '', password: ''};
  }

  updateUsername(e){
    e.preventDefault();
    this.setState({ username: e.target.value });

  }
  updatePassword(e){
    e.preventDefault();
    this.setState({ password: e.target.value });

  }
  processForm(e){
    e.preventDefault();
  }
  render(){
    return(
      <form className='auth'>
        <label>
          Username:
          <input type='text'
            onChange={this.updateUsername.bind(this)}
            value={this.state.username} />
        </label>
        <label>
          Password
          <input type='password'
            onChange={this.updatePassword.bind(this)}
            value={this.state.password} />
        </label>
        <input type='submit'
          onClick={this.processForm.bind(this)}/>
      </form>
    );
  }
}

export default SessionForm;
