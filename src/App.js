import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// <<<<<<< HEAD
import React from 'react';

import Signup from './components/signup/signup';
import Login from './components/login/login';
// =======
import Body from "./components/body/Body";
import Favs from "./components/favs/Favs";
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/Checkout';
import Products from './components/Products/Products';
import Navbar from './components/navbar/navbar';
import ProdDetails from "./components/ProductDetails/proDetails";
import Footer from "./components/footer/footer"

function App() {
  return (
    <Router>
      <Switch>
        <Route path={"/login"} component={Login} />
        <Route path={"/signup"} component={Signup} />

        <div>
          <Navbar />
          <Route path="/" exact component={Body} />
          <Route path="/home" component={Body} />
          <Route path="/favourites" component={Favs} />
          <Route path="/cart" exact component={Cart} />
          <Route path="/checkout" exact component={Checkout} />
          <Route path="/products" exact component={Products} />
          <Route path="/productDetails/:id" exact component={ProdDetails} />
          <Footer />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
