/* eslint-disable no-underscore-dangle */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import { Mutation, Query } from 'react-apollo';
import { Link } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import GET_ALL_ITEM from '../../../graphql/query/item/GetAllItem';
import DELETE_ITEM from '../../../graphql/mutation/item/DeleteItem';
const history = createHistory({
  forceRefresh: true,
});
const ITEMPERPAGE = 60;
class ListITEMS extends Component {
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
      <Query query={GET_ALL_ITEM}>
        {({ loading, data }) => {
          console.log('test', data);
          if (loading) {
            return 'Loading...';
          }
          const { listitem } = data;
          const { currentPage } = this.state;
          const indexOfLastItem = currentPage * ITEMPERPAGE;
          const indexOfFirstItem = indexOfLastItem - ITEMPERPAGE;
          const currentItems = listitem.slice(
            indexOfFirstItem,
            indexOfLastItem
          );
          const pageNumbers = [];
          for (let i = 1; i <= Math.ceil(listitem.length / ITEMPERPAGE); i += 1) {
            pageNumbers.push(i);
          }
          const RenderPageNumbers = pageNumbers.map((number) => {
            if (pageNumbers.length > 1) {
              return (
                <Link key={number} id={number} onClick={this.handleClick}>
                  {number}
                </Link>
              );
            }
            return null;
          });
          const items = currentItems.map((item) => (
            <div className="grid-group">
              <div className="gallery">
                <div className="grid-group-image">
                  <img alt={item.date_create} id="gal-img" src={item.images.large} />
                </div>
                
                <div className="grid-group-meta">{item.name}</div>
                <div className="grid-group-meta">
                  <div className="left">
                    <Link to={`/item/${item.id}`}>
                      <img
                        title="update item"
                        alt="update"
                        src="/img/update.png"
                      />
                    </Link>
                  </div>
                  {/* <div className="right">
                    <Mutation mutation={DELETE_ITEM}>
                      {(deleteItem) => (
                        <button
                          className="transparent"
                          onClick={(e) => {
                            deleteItem({
                              variables: {
                                id: item.id,
                                name: item.name,
                              },
                            })
                              .then(() => history.push('/'))
                              .catch((e));
                          }}
                        >
                          <img
                            alt="delete"
                            src="/img/delete.png"
                          />
                        </button>
                      )}
                    </Mutation>
                  </div> */}
                </div>
              </div>
            </div>
          ));
          return (
            <div id="app">
              <header>
                <h2 className="section-title">list of items</h2>
              </header>
              <section className="grid">{items}</section>
              {/* <div className="pagination">{RenderPageNumbers}</div> */}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default ListITEMS;
