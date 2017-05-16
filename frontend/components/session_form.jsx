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
    this.props.processForm(this.state);
  }

  demoSignIn(e){
    e.preventDefault();
  }
  render(){
    console.log(this.props.location.pathname);
    const isSignUpForm = this.props.formType === 'signup';
    const submitText = isSignUpForm ? 'Sign Up' : 'Log In';
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
          onClick={this.processForm.bind(this)}
          value={submitText}/>

        <button className="demo"
          onClick={this.demoSignIn.bind(this)}
          disabled>Demo!</button>
      </form>
    );
  }
}

export default SessionForm;
