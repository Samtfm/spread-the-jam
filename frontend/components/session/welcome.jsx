import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
    <div className="banner welcome">
      <div className="banner-image"
        style={{backgroundImage: `url(${'http://res.cloudinary.com/samtfm/image/upload/v1495558030/guitar_notebook.jpg'})`}}></div>
      <div className='banner-content'>
        <h2>Let's play music together!</h2>
        <nav>
          <Link tabIndex="-1" to='/signup'>
            <button>Sign Up</button>
          </Link>
        </nav>
      </div>
    </div>

);


export default Welcome;
