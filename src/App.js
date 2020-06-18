import React from 'react';
import {Route, Switch} from 'react-router-dom';

import GitHubProvider from './contexts/github/GitHubProvider';
import AlertProvider from './contexts/alert/AlertProvider';

import AboutPage from './components/page/AboutPage';
import HomePage from './components/page/HomePage';
import NavigationBar from './components/layout/NavigationBar';
import NotFoundPage from './components/page/NotFoundPage';
import UserPage from './components/page/UserPage';

const App = () => (
  <GitHubProvider>
    <NavigationBar />
    <AlertProvider>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/users/:login' component={UserPage} />
        <Route exact path='/about' component={AboutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AlertProvider>
  </GitHubProvider>
);

export default App;

/*
class App extends Component {
  state = {
    isSearching: false,
    users: [],
    user: {},
    repositories: []
  };

  findUsers = async username => {
    this.setState({isSearching: true});

    const {
      data: {items: users}
    } = await axios.get(
      `https://api.github.com/search/users?q=${username}` +
        `&client_id=${process.env.REACT_APP_CLIENT_ID}` +
        `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({isSearching: false, users});
  };

  clearUsers = () => this.setState({users: []});

  findUser = async login => {
    const {data: user} = await axios.get(
      `https://api.github.com/users/${login}` +
        `?client_id=${process.env.REACT_APP_CLIENT_ID}` +
        `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({user});
  };

  findRepositories = async login => {
    const {data: repositories} = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:desc` +
        `&client_id=${process.env.REACT_APP_CLIENT_ID}` +
        `&client_secret=${process.env.REACT_APP_CLIENT_SECRET}`
    );

    this.setState({repositories});
  };

  render() {
    const {isSearching, users, user, repositories} = this.state;

    return (
      <Fragment>
        <NavigationBar />
        <Switch>
          <Route
            exact
            path='/'
            render={() => (
              <Fragment>
                <SearchBar
                  findUsers={this.findUsers}
                  hasUsers={users.length > 0}
                  clearUsers={this.clearUsers}
                />
                {isSearching ? (
                  <Spinner />
                ) : (
                  users.length !== 0 && <UsersList users={users} />
                )}
              </Fragment>
            )}
          />
          <Route
            exact
            path='/users/:login'
            render={props => (
              <UserPage
                {...props}
                findUser={this.findUser}
                user={user}
                findRepositories={this.findRepositories}
                repositories={repositories}
              />
            )}
          />
          <Route exact path='/about' component={AboutPage} />
        </Switch>
      </Fragment>
    );
  }
}
*/
