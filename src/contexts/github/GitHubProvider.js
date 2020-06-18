import React, {useReducer} from 'react';
import axios from 'axios';

import GitHubContext from './GitHubContext';
import GitHubReducer from './GitHubReducer';
import {
  SET_IS_SEARCHING,
  SET_USERS,
  CLEAR_USERS,
  SET_USER,
  CLEAR_USER,
  SET_REPOSITORIES
} from '../types';

let clientId;
let clientSecret;

if (process.env.NODE_ENV !== 'production') {
  clientId = process.env.REACT_APP_CLIENT_ID;
  clientSecret = process.env.REACT_APP_CLIENT_SECRET;
} else {
  clientId = process.env.CLIENT_ID;
  clientSecret = process.env.CLIENT_SECRET;
}

const GitHubProvider = ({children}) => {
  const [state, dispatch] = useReducer(GitHubReducer, {
    isSearching: false,
    users: [],
    user: {},
    repositories: []
  });

  const findUsers = async query => {
    dispatch({type: SET_IS_SEARCHING});

    const {
      data: {items: payload}
    } = await axios.get(
      `https://api.github.com/search/users?q=${query}` +
        `&client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({type: SET_USERS, payload});
  };

  const clearUsers = () => dispatch({type: CLEAR_USERS});

  const findUser = async login => {
    dispatch({type: SET_IS_SEARCHING});

    const {data: payload} = await axios.get(
      `https://api.github.com/users/${login}` +
        `?client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({type: SET_USER, payload});
  };

  const clearUser = () => dispatch({type: CLEAR_USER});

  const findRepositories = async login => {
    dispatch({type: SET_IS_SEARCHING});

    const {data: payload} = await axios.get(
      `https://api.github.com/users/${login}/repos` +
        `?per_page=5&sort=created:desc` +
        `&client_id=${clientId}&client_secret=${clientSecret}`
    );

    dispatch({type: SET_REPOSITORIES, payload});
  };

  return (
    <GitHubContext.Provider
      value={{
        state,
        findUsers,
        clearUsers,
        findUser,
        clearUser,
        findRepositories
      }}
    >
      {children}
    </GitHubContext.Provider>
  );
};

export default GitHubProvider;
