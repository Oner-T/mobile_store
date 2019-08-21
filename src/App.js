import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/UI/NavBar/Navbar';
import ProductList from './components/ProductList/ProductList';
import Details from './components/Details/Details';
import Cart from './components/Cart/Cart';
import Default from './components/Default';
import Modal from "./components/UI/Modal/Modal"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ProductList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    )
  };
}

export default App;
