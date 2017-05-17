import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className='welcome'>
    <h2>Welcome!</h2>
    <nav>
      <Link to='/signin' className='button'>
        <button>Log In</button>
      </Link>
      <Link to='/signup' className='button'>
        <button>Sign Up</button>
      </Link>
    </nav>
  </div>
);


export default Welcome;
