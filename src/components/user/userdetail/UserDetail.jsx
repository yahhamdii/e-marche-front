/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import UpdateUser from '../updateuser';
import GET_USER_BY_ID from '../../../graphql/query/user/GetUserById';
class UserDetail extends Component {
  render() {
    const { match } = this.props;
    return (
      <div id="app">
        <header>
          <h2 className="section-title">Edit user</h2>
        </header>
        <Query
          query={GET_USER_BY_ID}
          variables={{
            id: match.params.id,
          }}
        >
          {({ data, loading }) => {
            if (loading) {
              return 'Loading...';
            }
            const { user } = data;
            return (
              <table border="0" cellPadding="0" cellSpacing="0">
                <div>
                  <h1>Edit User</h1>
                  <h1>{user.username}</h1>
                  <UpdateUser user={user} />
                </div>
              </table>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default UserDetail;
