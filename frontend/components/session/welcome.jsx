import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => (
    <div>

      <div className="banner welcome">
        <div className="banner-image"
          style={{backgroundImage: `url(${'http://res.cloudinary.com/samtfm/image/upload/v1495558030/guitar_notebook.jpg'})`}}></div>
        <div className='banner-content'>
          <div className='banner-text'>
            <h2>Do you play music?</h2>
            <p>Of course you do!</p>
          </div>
          <nav>
            <Link tabIndex="-1" to='/signup'>
              <button className='banner-button'>Let's play music together!</button>
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
          <p>Explore new styles! Maybe even start a band!</p>
        </div>
      </section>

    </div>
);

import {connect} from 'react-redux';
export default connect(state => ({currentUser: Boolean(state.session.currentUser)}))(Welcome);
