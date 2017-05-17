import React from 'react';
import { Link } from 'react-router-dom';

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
    this.props.processForm(this.state);
  }

  demoSignIn(e){
    e.preventDefault();
  }
  render(){
    const isSignUpForm = this.props.formType === 'signup';
    const submitText = isSignUpForm ? 'Sign Up' : 'Log In';
    const SwitchFormLink = isSignUpForm ?
      () => (<Link to="/signin">Returning user? Log in here!</Link>) :
      () => (<Link to="/signup">New user? Sign up here!</Link>);
    return(
      <form className='auth'>
        <ul className='errors'>
          {this.props.errors ?
          (this.props.errors.map((err) => <li>{err}</li>)) : ''}
        </ul>
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
          onClick={this.processForm.bind(this)}
          value={submitText}/>

        <button className="demo"
          onClick={this.demoSignIn.bind(this)}
          disabled>Demo!</button>
        <SwitchFormLink />
      </form>
    );
  }
}

export default SessionForm;
