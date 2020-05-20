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
import logo from './style/images/logo/logo.PNG'

const client = new ApolloClient({
  uri: 'http://localhost:4000',
});
const App = () => (
  <ApolloProvider client={client}>
    <Router>
      <div className="header-layout-2">
      <div id="page" class="hfeed site">
      <header id="site-header" class="site-header has-hot-words header-department-top">
      <div class="header-main-wapper">
                <div class="header-main">
                    <div class="container">
                        <div class="row header-row">
                            <div class="header-logo col-lg-3 col-md-6 col-sm-6 col-xs-6 ">
                                <div class="d-logo">
                                    <div class="logo"> <a href="#">
                                            <img class="site-logo" alt="el9ofa.tn"
                                                src={logo} />
                                        </a></div>

                                

                                </div>
                                <div class="d-department hidden-xs hidden-sm ">
                                <div class="products-cats-menu mf-closed">
                                        <h2 class="cats-menu-title"><i class="icon-menu"><span
                                                    class="s-space">&nbsp;</span></i><span class="text">Shop By
                                                Department</span></h2>
                                        <div class="toggle-product-cats nav" >
                                            <ul id="menu-shop-by-department" class="menu">
                                                <li
                                                    class="menu-item menu-item-type-taxonomy menu-item-object-product_cat menu-item-has-children menu-item-409 dropdown is-mega-menu has-width has-background">
                                                    <a href=""
                                                        class="dropdown-toggle" role="button">Consumer
                                                        Electrics</a>
                                                    
                                                </li>
                                               
                                               
                                            </ul>
                                        </div>
                                    </div>

                                  </div>
                                </div>
                                <div class="header-extras col-lg-9 col-md-6 col-sm-6 col-xs-6">
                                <div class="product-extra-search">
                                <form class="products-search" method="get"action="">
                                <div class="psearch-content">
                                <div class="product-cat">
                                                <div class="product-cat-label ">All</div> <select name='product_cat'
                                                    id='header-search-product-cat' class='product-cat-dd'>
                                                    <option value='0' selected='selected'>All</option>
                                                    <option class="level-0" value="babies-moms">Babies &amp; Moms
                                                    </option>
                                                    
                                                </select>
                                            </div>
                                            <div class="search-wrapper">
											<input type="text" name="s" class="search-field" autocomplete="off" placeholder="I&#039;m shopping for..."/> 
											<div class="search-results woocommerce"></div>
                      </div>
                      <button type="submit" class="search-submit">Rechercher</button>
                                  </div>
                                  </form>
                                  </div>
                                  <ul class="extras-menu">
                                    <li class="extra-menu-item menu-item-wishlist menu-item-yith"> <a
                                            class="yith-contents" id="icon-wishlist-contents"
                                            href="http://demo2.drfuri.com/martfury11/wishlist/"> <i
                                                class="icon-heart extra-icon" rel="tooltip"></i> <span
                                                class="mini-item-counter"> 0 </span> </a></li>
                                    <li class="extra-menu-item menu-item-cart mini-cart woocommerce"> <a
                                            class="cart-contents" id="icon-cart-contents"
                                            href=" /martfury11/cart/"> <i
                                                class="icon-bag2 extra-icon"></i> <span class="mini-item-counter"> 0
                                            </span> </a>
                                        <div class="mini-cart-content"> <span class="tl-arrow-menu"></span>
                                            <div class="widget_shopping_cart_content">
                                                <p class="woocommerce-mini-cart__empty-message">No products in the cart.
                                                </p>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="extra-menu-item menu-item-account"> <a
                                            href="#"
                                            id="menu-extra-login"><i class="extra-icon icon-user"></i>S'identifier</a> <a
                                            href="#" class="item-register"
                                            id="menu-extra-register">S'inscrire</a></li>
                                </ul>
                                </div>
                                </div>
                                </div>
                                </div>
                                </div>
                                <div class="main-menu hidden-xs hidden-sm">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12 col-sm-12">
                            <div class="col-header-menu">
                                <div class="primary-nav nav">
                                    <ul id="menu-primary-menu" class="menu">
                                        <li
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2346">
                                            <Link to="/">TOUTES CATÉGORIES</Link></li>
                                        <li
                                            class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2347">
                                            <a href="">Today
                                                Deals</a></li>
                                    
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mobile-menu hidden-lg hidden-md">
                <div class="container">
                    <div class="mobile-menu-row"> <a class="mf-toggle-menu" id="mf-toggle-menu" href="#"> <i
                                class="icon-menu"></i> </a>
                        <div class="product-extra-search">
                            <form class="products-search" method="get" action="">
                                <div class="psearch-content">
                                    <div class="product-cat">
                                        <div class="product-cat-label no-cats">All</div>
                                    </div>
                                    <div class="search-wrapper"> 
                                    <input type="text" name="s" class="search-field"
                                            autocomplete="off" placeholder="I&#039;m 
                                            shopping for..."/> 
                                            <div class="search-results woocommerce"></div>
                                    </div> 
                                    <button type="submit" class="search-submit">Search</button>
                                </div>
                            </form>
                            <ul class="hot-words">
                                <li><a href="">iphone
                                        x</a></li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
            </div>                        
        </header>
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
