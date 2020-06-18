import React, {Fragment} from 'react';

import SearchBar from '../layout/SearchBar';
import UsersList from '../user/UsersList';

const HomePage = () => (
  <Fragment>
    <SearchBar />
    <UsersList />
  </Fragment>
);

export default HomePage;
