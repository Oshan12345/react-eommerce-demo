import React from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./component/Cart/Cart";
import Default from "./component/Default";
import Details from "./component/Details";
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Modal from "./component/Modal";
function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={ProductList} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
      <Modal />
    </>
  );
}

export default App;
