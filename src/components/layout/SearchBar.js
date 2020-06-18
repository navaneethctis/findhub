import React, {useContext, useState} from 'react';

import AlertContext from '../../contexts/alert/AlertContext';
import GitHubContext from '../../contexts/github/GitHubContext';

import AlertBox from './AlertBox';

const SearchBar = () => {
  const {
    state: {users},
    findUsers,
    clearUsers: clearUsersGlobal
  } = useContext(GitHubContext);
  const {state: alert, renderAlertBox} = useContext(AlertContext);

  const [query, setQuery] = useState('');

  const onSubmit = event => {
    event.preventDefault();

    if (!query) return renderAlertBox('Please enter a username.', 'danger');

    findUsers(query);
  };

  const onChange = event => setQuery(event.target.value);

  const clearUsers = () => {
    setQuery('');

    clearUsersGlobal();
  };

  return (
    <section className='section has-background-white'>
      <div className='columns is-centered'>
        <div className='column is-three-fifths'>
          <h2 className='title is-4'>Find users on GitHub</h2>
          {alert && <AlertBox />}
          <form onSubmit={onSubmit}>
            <div className='field is-grouped'>
              <div className='control is-expanded'>
                <input
                  onChange={onChange}
                  value={query}
                  className='input'
                  placeholder='Username'
                  type='text'
                />
              </div>
              <div className='control'>
                <button className='button is-info'>Search</button>
              </div>
              <div className='control'>
                <button
                  onClick={clearUsers}
                  disabled={!(users.length > 0)}
                  className='button is-info is-light'
                  type='button'
                >
                  Clear
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SearchBar;
