import React, {useContext} from 'react';

import GitHubContext from '../../contexts/github/GitHubContext';

import Spinner from '../layout/Spinner';
import UserCard from './UserCard';

const UsersList = () => {
  const {
    state: {isSearching, users}
  } = useContext(GitHubContext);

  if (isSearching) return <Spinner />;

  return (
    <section className='section'>
      <div className='container has-text-centered'>
        <div className='columns is-multiline'>
          {users.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsersList;
