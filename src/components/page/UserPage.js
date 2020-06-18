import React, {Fragment, useContext, useEffect} from 'react';

import GitHubContext from '../../contexts/github/GitHubContext';

import RepositoriesList from '../user/repository/RepositoriesList';
import Spinner from '../layout/Spinner';

const UserPage = ({
  match: {
    params: {login}
  },
  history
}) => {
  const {
    state: {user},
    findUser,
    clearUser
  } = useContext(GitHubContext);

  const goBack = event => {
    event.preventDefault();

    history.goBack();

    clearUser();
  };

  useEffect(() => {
    findUser(login);

    // eslint-disable-next-line
  }, []);

  if (Object.keys(user).length === 0) return <Spinner />;

  return (
    <Fragment>
      <section className='section'>
        <div className='container'>
          <a onClick={goBack} className='button is-info is-light' href='/'>
            Back
          </a>
          <div className='card'>
            <div className='card-content has-text-centered'>
              <figure className='image is-128x128 is-inline-block'>
                <img
                  alt={user.login}
                  src={user.avatar_url}
                  className='is-rounded'
                  style={{height: '128px', width: '128px'}}
                />
              </figure>
              <h2 className='title is-1'>{user.name}</h2>
              <h3 className='subtitle'>
                <a href={user.html_url} className='is-link'>
                  @{user.login}
                </a>
              </h3>
              {user.bio && <p className='content'>{user.bio}</p>}
            </div>
            <footer className='card-footer'>
              <div className='card-footer-item'>
                <nav className='level' style={{flexGrow: '1'}}>
                  <div className='level-item has-text-centered'>
                    <div>
                      <p className='heading'>Followers</p>
                      <p className='subtitle'>{user.followers}</p>
                    </div>
                  </div>
                  <div className='level-item has-text-centered'>
                    <div>
                      <p className='heading'>Following</p>
                      <p className='subtitle'>{user.following}</p>
                    </div>
                  </div>
                  <div className='level-item has-text-centered'>
                    <div>
                      <p className='heading'>Gists</p>
                      <p className='subtitle'>{user.public_gists}</p>
                    </div>
                  </div>
                  <div className='level-item has-text-centered'>
                    <div>
                      <p className='heading'>Repositories</p>
                      <p className='subtitle'>{user.public_repos}</p>
                    </div>
                  </div>
                </nav>
              </div>
            </footer>
          </div>
        </div>
      </section>
      <RepositoriesList />
      <footer className='footer'>
        <div className='content has-text-centered'>
          &copy; 2020{' '}
          <a className='is-link' href='/'>
            FindHub
          </a>
          . All rights reserved.
        </div>
      </footer>
    </Fragment>
  );
};

export default UserPage;

/*
class UserPage extends Component {
  componentDidMount() {
    const {
      match: {
        params: {login}
      },
      findUser,
      findRepositories
    } = this.props;

    findUser(login);

    findRepositories(login);
  }

  render() {
    const {user, repositories} = this.props;

    if (Object.keys(user).length === 0) return <Spinner />;

    return (
      <Fragment>
        <section className='section'>
          <div className='container'>
            <Link to='/' className='button is-info is-light'>
              Back
            </Link>
            <div className='card'>
              <div className='card-content has-text-centered'>
                <figure className='image is-128x128 is-inline-block'>
                  <img
                    alt={user.login}
                    src={user.avatar_url}
                    className='is-rounded'
                    style={{height: '128px', width: '128px'}}
                  />
                </figure>
                <h2 className='title is-1'>{user.name}</h2>
                <h3 className='subtitle'>
                  <a href={user.html_url} className='is-link'>
                    @{user.login}
                  </a>
                </h3>
                {user.bio && <p className='content'>{user.bio}</p>}
              </div>
              <footer className='card-footer'>
                <div className='card-footer-item'>
                  <div className='has-text-centered'>
                    <p className='title is-6'>Followers</p>
                    <p className='subtitle'>{user.followers}</p>
                  </div>
                </div>
                <div className='card-footer-item'>
                  <div className='has-text-centered'>
                    <p className='title is-6'>Following</p>
                    <p className='subtitle'>{user.following}</p>
                  </div>
                </div>
                <div className='card-footer-item'>
                  <div className='has-text-centered'>
                    <p className='title is-6'>Gists</p>
                    <p className='subtitle'>{user.public_gists}</p>
                  </div>
                </div>
                <div className='card-footer-item'>
                  <div className='has-text-centered'>
                    <p className='title is-6'>Repositories</p>
                    <p className='subtitle'>{user.public_repos}</p>
                  </div>
                </div>
              </footer>
            </div>
          </div>
        </section>
        {repositories.length !== 0 && (
          <RepositoriesList repositories={repositories} />
        )}
        <footer className='footer has-background-white'>
          <div className='content has-text-centered'>
            &copy; 2020{' '}
            <a className='is-link' href='/'>
              FindHub
            </a>
            . All rights reserved.
          </div>
        </footer>
      </Fragment>
    );
  }
}
*/
