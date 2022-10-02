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
// <<<<<<< HEAD
import Products from './components/Products/Products';

// =======
import Navbar from './components/navbar/navbar';
// >>>>>>> missing-packs
// >>>>>>> 15334239e3b99f437dcacdb748553bb7de3137b5

function App() {
  function rate(rating){
    let andHalf = (rating % 1) > 0.3 && (rating % 1) < 0.7? true: false;
    let roundRate = (rating % 1 >= 0.7)? Math.ceil(rating):Math.floor(rating);
    let component = []
    for(let i = 1; i <= 5; i++){
      if (i <= roundRate){
        component.push(1)
      } else if(andHalf){
        component.push(0.5)
        andHalf = false;
      } else{
        component.push(0)
      }
    }
    return(<div className='d-flex gap-2 text-warning'>
      {component.map(i =>{
        if (i == 1){
          return(<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>)
        } else if(i == 0.5){
          return (<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                  </svg>)
        } else{
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
          )
        }
      })}
    </div>)
  }

  function intercept(...items){
    let setsOfItems = [];
    for (let i of items){
      setsOfItems.push(new Set(i));
    }
    let intersection = new Set(setsOfItems[0])

    for (let i = 1; i < setsOfItems.length - 1; i++){
      intersection = new Set([...intersection].filter(x => setsOfItems[i+1].has(x)))
    }
    return Array.from(intersection);
    
  }
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
{/* >>>>>>> 15334239e3b99f437dcacdb748553bb7de3137b5 */}
    </Router>
  );
}

export default App;
