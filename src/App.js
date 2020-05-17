import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import {
  Link, Route, BrowserRouter as Router, Switch,
} from 'react-router-dom';
import ListItems from './components/item/listitems';
import ItemDetail from './components/item/itemdetail';
import AddItem from './components/item/additem';
import ListUsers from './components/user/listusers';
import UserDetail from './components/user/userdetail';
import AddUser from './components/user/adduser';
import './style/style.css';
import './style/menu.css';

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div id="app">
        <div className="topnav" id="myTopnav">
          <Link to="/">List Item</Link>
          <Link to="/add/item">Add Item</Link>
          <Link to="/user"> List User</Link>
          <Link to="/add/user">Add User</Link>
        </div>
        <Switch>
          <Route exact path="/" component={ListItems} />
          <Route exact path="/add/item" component={AddItem} />
          <Route path="/item/:id" component={ItemDetail} />
          <Route path="/user" component={ListUsers} />
          <Route path="/add/user" component={AddUser} />
          <Route component={UserDetail} path="/users/:id" />
        </Switch>
      </div>
    </Router>
  </ApolloProvider>
);

export default App;
