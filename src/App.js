import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// <<<<<<< HEAD
import React from 'react';

import Signup from './components/signup/signup';
import Login from './components/login/login';
// =======
import Body from "./components/body/Body";
import Favs from "./components/favs/Favs";
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/Checkout';
<<<<<<< HEAD
// <<<<<<< HEAD
import Products from './components/Products/Products';

// =======
import Navbar from './components/navbar/navbar';
// >>>>>>> missing-packs
// >>>>>>> 15334239e3b99f437dcacdb748553bb7de3137b5
=======
import Products from './components/Products/Products';
import Navbar from './components/navbar/navbar';
import ProdDetails from "./components/ProductDetails/proDetails";
>>>>>>> d6b5e0b97d3d24e42348d0817a1d39326f4ac85d

function App() {
  return (
   
   
    
    <Router>
{/* <<<<<<< HEAD */}
      <Route path={"/signup"} component={Signup}/>
      <Route path={"/login"} component={Login}/>

       {/* <Signup/> */}
{/* ======= */}
      <Navbar />
      <Route path="/" exact component={Body} />
      <Route path="/home" component={Body} />
      <Route path="/favourites" component={Favs} />
      <Route path="/cart" exact component = {Cart}/>
      <Route path="/checkout" exact component = {Checkout}/>
      {/* {console.log(intercept([1,4,5,6,9],[4,6,8,9,13],[6,9,13,20,21]))} */}
      <Route path="/products" exact component={Products}/>
<<<<<<< HEAD
{/* >>>>>>> 15334239e3b99f437dcacdb748553bb7de3137b5 */}
=======
      <Route path="/productDetails/:id" exact component={ProdDetails}/>
>>>>>>> d6b5e0b97d3d24e42348d0817a1d39326f4ac85d
    </Router>
  );
}

export default App;
