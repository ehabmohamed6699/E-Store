import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import React from 'react';

import Signup from './components/signup/signup';
import Login from './components/login/login';

function App() {
  return (
   
   
    
    <Router>
      <Route path={"/signup"} component={Signup}/>
      <Route path={"/login"} component={Login}/>

       {/* <Signup/> */}
    </Router>
  );
}

export default App;
