import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
    <div>

      <div className="banner welcome">
        <div className="banner-image"
          style={{backgroundImage: `url(${'http://res.cloudinary.com/samtfm/image/upload/v1495558030/guitar_notebook.jpg'})`}}></div>
        <div className='banner-content'>
          <h2>Do you play music?</h2>
          <nav>
            <Link tabIndex="-1" to='/signup'>
              <button>Let's play music together!</button>
            </Link>
          </nav>
        </div>
      </div>
      <section className='steps'>
        <div>
          <h2>Show up for a jam</h2>
          <p>You and a few others meet up with your instruments.</p>
        </div>
        <div>
          <h2>Create live music</h2>
          <p>Put your sounds together in whatever ways they fit.</p>
        </div>
        <div>
          <h2>See where it takes you</h2>
          <p>Explore new styles! Start a band even!</p>
        </div>
      </section>

    </div>
);


export default Welcome;
