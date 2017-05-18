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
    this.setState({password: ''});
    this.passwordInput.focus();
  }

  demoSignIn(e){
    e.preventDefault();
    this.props.demoSignIn();
  }

  componentWillUnmount(){
    this.props.clearErrors();
  }
  componentDidMount(){
    this.usernameInput.focus();
  }

  render(){
    const isSignUpForm = this.props.formType === 'signup';
    const submitText = isSignUpForm ? 'Sign Up' : 'Log In';
    const SwitchFormLink = isSignUpForm ?
      () => (<p>Returning user? <Link to="/signin"> Log in here!</Link></p>) :
      () => (<p>New user? <Link to="/signup">Sign up here!</Link></p>);
    return(
      <form className='auth'>
        <h2>Welcome!</h2>
        <SwitchFormLink />
        <ul className='errors'>
          {this.props.errors ?
          (this.props.errors.map((err) => <li>{err}</li>)) : ''}
        </ul>
        <input type='text'
          placeholder='username'
          onChange={this.updateUsername.bind(this)}
          value={this.state.username}
          ref={(input) => { this.usernameInput = input; }} />
        <input type='password'
          placeholder='password'
          onChange={this.updatePassword.bind(this)}
          value={this.state.password}
          ref={(input) => { this.passwordInput = input; }} />
        <input type='submit'
          onClick={this.processForm.bind(this)}
          value={submitText}/>

        <button className="demo"
          onClick={this.demoSignIn.bind(this)}>Demo!</button>
      </form>
    );
  }
}

export default SessionForm;
