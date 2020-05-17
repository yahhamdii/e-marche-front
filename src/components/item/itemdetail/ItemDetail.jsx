/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Query } from 'react-apollo';
import UpdateItem from '../updateitem';
import GET_ITEM_BY_ID from '../../../graphql/query/item/GetItemById';
class ItemDetail extends Component {
  render() {
    const { match } = this.props;
    return (
      <div id="app">
        <header>
          <h2 className="section-title">Edit Item</h2>
        </header>
        <Query
          query={GET_ITEM_BY_ID}
          variables={{
            id: match.params.id,
          }}
        >
          {({ data, loading }) => {
            if (loading) {
              return 'Loading...';
            }
            const { item } = data;
            return (
              <table border="0" cellPadding="0" cellSpacing="0">
                <div>
                  <img alt={item.date_create} src={item.images.small} />
                  <UpdateItem item={item} />
                </div>
              </table>
            );
          }}
        </Query>
      </div>
    );
  }
}
export default ItemDetail;
