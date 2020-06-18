import React from 'react';
import PropTypes from 'prop-types';

const RepositoryItem = ({repository}) => (
  <div className='column is-one-fifth'>
    <div className='box'>
      <a className='is-link' href={repository.html_url}>
        {repository.name}
      </a>
    </div>
  </div>
);

RepositoryItem.propTypes = {
  repository: PropTypes.object.isRequired
};

export default RepositoryItem;
