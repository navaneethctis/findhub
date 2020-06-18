import React, {useContext, useEffect} from 'react';
import {useRouteMatch} from 'react-router-dom';

import GitHubContext from '../../../contexts/github/GitHubContext';

import RepositoryItem from './RepositoryItem';
import Spinner from '../../layout/Spinner';

const RepositoriesList = () => {
  const {
    state: {isSearching, repositories},
    findRepositories
  } = useContext(GitHubContext);

  const {
    params: {login}
  } = useRouteMatch();

  useEffect(() => {
    findRepositories(login);

    // eslint-disable-next-line
  }, []);

  if (isSearching) return <Spinner />;

  if (repositories.length === 0) return null;

  return (
    <section className='section'>
      <div className='container'>
        <h2 className='title is-4'>Latest repositories</h2>
        <div className='columns'>
          {repositories.map(repository => (
            <RepositoryItem key={repository.id} repository={repository} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RepositoriesList;
