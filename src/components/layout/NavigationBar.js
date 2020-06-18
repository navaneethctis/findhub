import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const NavigationBar = ({icon, title}) => (
  <nav className='navbar is-info'>
    <div className='container is-fluid'>
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <span className='icon is-large'>
            <i className={icon}></i>
          </span>
          <h1 className='title has-text-white'>{title}</h1>
        </a>
      </div>
      <div className='navbar-menu is-active'>
        <div className='navbar-end'>
          <Link to='/' className='navbar-item'>
            Home
          </Link>
          <Link to='/about' className='navbar-item'>
            About
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

NavigationBar.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string
};

NavigationBar.defaultProps = {
  icon: 'fab fa-github fa-2x',
  title: 'FindHub'
};

export default NavigationBar;
