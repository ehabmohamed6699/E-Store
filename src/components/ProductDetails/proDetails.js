import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { setFavorite } from './store/action'
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ReactStars from 'react-stars'
import { FaStar, FaStarHalf } from 'react-icons/fa';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { FaHeart } from 'react-icons/fa';
import "./prodDetails.css";

function ProdDetails(){

  let params = useParams();
  let [product, setProduct] = useState({});
  const dispatch=useDispatch()

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
    return(<div className='d-flex gap-2 text-light mt-' >
      {component.map(i =>{
        if (i == 1){
          return(<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                </svg>)
        } else if(i == 0.5){
          return (<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star-half" viewBox="0 0 16 16">
                    <path d="M5.354 5.119 7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.548.548 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.52.52 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.58.58 0 0 1 .085-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.565.565 0 0 1 .162-.505l2.907-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.001 2.223 8 2.226v9.8z"/>
                  </svg>)
        } else{
          return(
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
              <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
            </svg>
          )
        }
      })}
    </div>)
  }
  useEffect(() => {
    axios
    .get(`https://dummyjson.com/products/${params.id}`)

        .then((ProData) => {
        console.log(ProData);
        setProduct(ProData.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

    return(
        <>
        <div className="header">
                   <h1>Product Details</h1>
                   <ol class="breadcrumb justify-content-center">  
                   <li><a href="/home">Home </a></li>
                   <li>
                   <a href="/productDetails">Product Details</a>
                   </li>
                   </ol>
                 </div>
     <div className="container">
      <div class="wrapper">
        <div class="main_card">
        <div class="card_right">
            <div class="img_container">
              <img 
                src=
                {product.thumbnail}
                alt=""
              />
            </div>           
          <div class="card_left">
          <div class="row-sm-2">   
              <div class="ptitle"><br></br>{product.title}</div>
              </div>              
              <br></br><br></br>
              <div class="row-sm-2"><div class="pprice">${product.price}.00
              </div>
                 </div>
              <br></br><br></br>
              <div class="row-sm-2">
              <div class="prate">
                   {rate(product.rating)}
               </div>
              </div>
                 <br></br><br></br>
                 <div class="row"> 
                 <div class="col-md-auto">
                 <button onClick={()=>dispatch(setFavorite(product))}>Add To Carts</button>
                </div>
          <div class="col-md-auto">
          <button class="btn1" onClick={()=>dispatch(setFavorite(product))}>
                 <FaHeart/>
                </button>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
      </div>
      <hr></hr>
      <a class="nav-link active" id="nav-one-tab" data-bs-toggle="tab" href="#nav-one" role="tab" aria-controls="nav-one" aria-selected="true">Description</a>
      <hr></hr>
      <p class="desc">
        {product.description}<br></br>
      </p>
        </>
    );
}
export default ProdDetails;
