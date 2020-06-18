import React from 'react';

const AboutPage = () => (
  <section className='section has-background-white'>
    <div className='container'>
      <div className='has-text-centered'>
        <div className='icon is-large'>
          <i className='fab fa-github fa-3x'></i>
        </div>
      </div>
      <h2 className='title is-1 has-text-centered'>FindHub</h2>
      <div className='has-text-centered'>
        <p className='title is-4 is-inline-block'>Version</p>
        <p className='content is-inline-block'>&nbsp;1.0.0</p>
      </div>
      <p className='content has-text-centered'>
        &copy; 2020{' '}
        <a className='is-link' href='/'>
          FindHub
        </a>
        . All rights reserved.
      </p>
    </div>
  </section>
);

export default AboutPage;
