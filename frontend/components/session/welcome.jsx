import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className='welcome'>
    <h2>Welcome!</h2>
    <nav>
      <Link tabIndex="-1" to='/signin'>
        <button>Log In</button>
      </Link>
      <Link tabIndex="-1" to='/signup'>
        <button>Sign Up</button>
      </Link>
    </nav>
  </div>
);


export default Welcome;
