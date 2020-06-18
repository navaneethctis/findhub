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

/*
class SearchBar extends Component {
  state = {
    alert: null,
    query: ''
  };

  static propTypes = {
    findUsers: PropTypes.func.isRequired,
    hasUsers: PropTypes.bool.isRequired,
    clearUsers: PropTypes.func.isRequired
  };

  renderAlertBox = (message, type) => this.setState({alert: {message, type}});

  removeAlertBox = () => this.setState({alert: null});

  onSubmit = event => {
    event.preventDefault();

    const {query} = this.state;

    if (!query)
      return this.renderAlertBox('Please enter a username.', 'danger');

    this.props.findUsers(query);
  };

  onChange = event => this.setState({query: event.target.value});

  clearUsers = () => {
    this.setState({query: ''});

    this.props.clearUsers();
  };

  render() {
    const {alert, query} = this.state;

    return (
      <section className='section has-background-white'>
        <div className='columns is-centered'>
          <div className='column is-three-fifths'>
            <h2 className='title is-4'>Find users on GitHub</h2>
            {alert && (
              <AlertBox alert={alert} removeAlertBox={this.removeAlertBox} />
            )}
            <form onSubmit={this.onSubmit}>
              <div className='field is-grouped'>
                <div className='control is-expanded'>
                  <input
                    onChange={this.onChange}
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
                    onClick={this.clearUsers}
                    disabled={!this.props.hasUsers}
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
  }
}
*/
