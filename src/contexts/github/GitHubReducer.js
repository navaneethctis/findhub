import {
  SET_IS_SEARCHING,
  SET_USERS,
  CLEAR_USERS,
  SET_USER,
  CLEAR_USER,
  SET_REPOSITORIES
} from '../types';

const GitHubReducer = (state, {type, payload}) => {
  switch (type) {
    case SET_IS_SEARCHING:
      return {...state, isSearching: true};
    case SET_USERS:
      return {...state, isSearching: false, users: payload};
    case CLEAR_USERS:
      return {...state, users: []};
    case SET_USER:
      return {...state, isSearching: false, user: payload};
    case CLEAR_USER:
      return {...state, user: {}, repositories: []};
    case SET_REPOSITORIES:
      return {...state, isSearching: false, repositories: payload};
    default:
      return state;
  }
};

export default GitHubReducer;
