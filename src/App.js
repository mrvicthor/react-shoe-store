import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import ItemList from "./components/itemList";
import Cart from "./components/Cart/cart";
import Default from "./components/default";
import Details from "./components/details";
import Modal from './components/modal'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={ItemList}></Route>
          <Route path="/details" component={Details}></Route>
          <Route path="/cart" component={Cart}></Route>
          <Route component={Default}></Route>
        </Switch>
        <Modal />
      </React.Fragment>
    );
  }
}

export default App;
