/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-underscore-dangle */
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import GET_ALL_USER from '../../../graphql/query/user/GetAllUser';
import DELETE_USER from '../../../graphql/mutation/user/DeleteUser';
const history = createHistory({
  forceRefresh: true,
});
const USERSPERPAGE = 10;
class ListUser extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
  }

  render() {
    return (
      <Query query={GET_ALL_USER}>

        {({ loading, data }) => {
          if (loading) return 'Loading...';

          const { listuser } = data;
          const { currentPage } = this.state;
          const indexOfLastuser = currentPage * USERSPERPAGE;
          const indexOfFirstuser = indexOfLastuser - USERSPERPAGE;
          const currentUsers = listuser.slice(indexOfFirstuser, indexOfLastuser);
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(listuser.length / USERSPERPAGE); i += 1) {
            pageNumbers.push(i);
          }
          const renderPageNumbers = pageNumbers.map((number) => {
            if (pageNumbers.length > 1) {
              return (
                <Link
                  key={number}
                  id={number}
                  onClick={this.handleClick}
                >
                  {number}
                </Link>
              );
            }
            return null;
          });

          const users = currentUsers.map((user) => (
            <table cellPadding="0" cellSpacing="0" border="0">
              <tbody>
                <tr>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.password}</td>
                  <td>
                    <Link to={`/users/${user._id}`}>
                      <img
                        title="update user"
                        alt="update"
                        src="/img/update.png"
                      />
                    </Link>
                  </td>
                  <td>
                    <Mutation
                      mutation={DELETE_USER}
                      refetchQueries={[{ query: GET_ALL_USER }]}
                    >
                      {(deleteUser) => (
                        // eslint-disable-next-line react/button-has-type
                        <button
                          className="transparent"
                          onClick={(e) => {
                            deleteUser({
                              variables: {
                                id: user._id,
                                email: user.email,
                              },
                            })
                              .then(() => history.push('/user'))
                              .catch((e));
                          }}
                        >
                          <img
                            src="/img/delete.png"
                          />
                        </button>
                      )}
                    </Mutation>
                  </td>
                </tr>
              </tbody>
            </table>
          ));
          return (
            <div id="app">
              <header>
                <h2 className="section-title">list of users</h2>
              </header>
              <div className="tbl-header">
                <div className="tbl-content">
                  <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                      <tr>
                        <th>Username</th>
                        <th>email</th>
                        <th>password</th>
                        <th>update</th>
                        <th>delete</th>
                      </tr>
                    </thead>

                  </table>
                  {users}
                  <div className="pagination">
                    {renderPageNumbers}
                  </div>
                </div>
              </div>
            </div>

          );
        }}
      </Query>

    );
  }
}
export default ListUser;
