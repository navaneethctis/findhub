import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const UserCard = ({user: {login, avatar_url}}) => (
  <div className='column is-one-quarter'>
    <div className='card'>
      <div className='card-content has-text-centered'>
        <figure className='image is-128x128 is-inline-block'>
          <img
            alt={login}
            src={avatar_url}
            className='is-rounded'
            style={{height: '128px', width: '128px'}}
          />
        </figure>
        <p className='title is-4'>{login}</p>
      </div>
      <footer className='card-footer has-background-info'>
        <Link
          to={`/users/${login}`}
          className='card-footer-item has-text-white'
        >
          View
        </Link>
      </footer>
    </div>
  </div>
);

UserCard.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserCard;
