import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Body from "./components/body/Body";
import Favs from "./components/favs/Favs";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact component={Body} />
        <Route path="/home" component={Body} />
        <Route path="/favourites" component={Favs} />
        {/*<Route path="/cart" component={Cart} />*/}
      </Router>
    </div>
  );
}

export default App;
