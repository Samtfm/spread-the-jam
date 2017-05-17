import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
  <div className='welcome'>
    <button>
      <Link to='/signin' className='button'>Log In</Link>
    </button>
    <button>
      <Link to='/signup' className='button'>Sign Up</Link>
    </button>
  </div>
);


export default Welcome;
