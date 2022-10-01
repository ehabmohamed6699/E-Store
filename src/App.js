import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./components/body/Body";
import Favs from "./components/favs/Favs";
import Cart from './components/Cart/cart';
import Checkout from './components/Checkout/Checkout';
import Products from './components/Products/Products';
import Navbar from './components/navbar/navbar';
import ProdDetails from "./components/ProductDetails/proDetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Body} />
      <Route path="/home" component={Body} />
      <Route path="/favourites" component={Favs} />
      <Route path="/cart" exact component = {Cart}/>
      <Route path="/checkout" exact component = {Checkout}/>
      {/* {console.log(intercept([1,4,5,6,9],[4,6,8,9,13],[6,9,13,20,21]))} */}
      <Route path="/products" exact component={Products}/>
      <Route path="/productDetails/:id" exact component={ProdDetails}/>
    </Router>
  );
}

export default App;
