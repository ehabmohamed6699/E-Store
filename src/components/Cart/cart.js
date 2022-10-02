import React from "react";
import "./cart.css";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import setCheckout from "../../store/action";

export default function Cart(){
    
    const dispatch = useDispatch();
    function sendToCheckout(){
        let check = {
            cart: cartProds,
            subTotal: calcSubTotal(),
        }
        dispatch(setCheckout(check));
    }
    let [cart, setCart] = useState({})
    let [cartProds,setCartProds] = useState(useSelector((state) => state.cartList));
    useEffect(()=>{
        setCartProds(cartProds.map(prod =>{
            return ({...prod, quantity:1, total: Math.round((prod.price - prod.price* prod.discountPercentage * 0.01)*1)})
        }))
        
    },[])

    function calcSubTotal(){
        let total = 0;
        for(let item of cartProds){
            total += Math.round((item.price - item.price * item.discountPercentage * 0.01) * item.quantity)
        }
        return total;
    }
    function increment(prod){
        setCartProds(cartProds.map(item =>{
            if (item.id == prod.id && item.quantity < item.stock){
                return({...item, quantity: item.quantity+1, total: Math.round((item.price - item.price * item.discountPercentage * 0.01) * (item.quantity + 1))})
            } else{
                return(item);
            }
        }))
    }

    function decrement(prod){
        setCartProds(cartProds.map(item =>{
            if (item.id == prod.id && item.quantity > 1){
                return({...item, quantity: item.quantity-1, total: Math.round((item.price - item.price * item.discountPercentage * 0.01) * (item.quantity - 1))})
            } else{
                return(item);
            }
        })
        )
    }

    function showCart(){
        if (cartProds.length == 0){
            return(
                <>
                <p className="display-3 mb-3 text-center">Your cart is empty</p>
                <Link to="" className="navigate" style={{width: "fit-content", margin: "0 auto"}}>Continue Shopping</Link>
                </>
            )
        } else{
            return(<div className="table-responsive" id="no-more-tables">
                <table class="table table-borderless">
            <thead>
                <tr>
                    <th scope="col" className="text-secondary">Product</th>
                    <th scope="col" className="text-secondary">Price</th>
                    <th scope="col" className="text-secondary">Quantity</th>
                    <th scope="col" className="text-secondary">Total</th>
                </tr>
            </thead>
            <tbody>
                {cartProds.map(item =>{
                    return(
                        <tr>
                            <td data-title="Product:" className="col-3 col-md-4 col-lg-6 titled">
                                {item.title}
                                <button className="del" onClick={()=>{
                                    removeProd(item);
                                }}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                                    </svg></button>
                            </td>
                            <td data-title="Price:"><del className="text-danger">{item.price}</del> {Math.round(item.price - item.price*item.discountPercentage*0.01)}$</td>
                            <td data-title="Quantity:">
                                <div className="d-flex align-items-center bordered quantity-box">
                                    <span className="px-4 py-0">{item.quantity}</span>
                                    <div className="d-flex flex-column rounded-0">
                                        <button className="px-2 rounded-0 m-0 py-0" onClick={()=>{
                                            increment(item)
                                            
                                        }}>+</button>
                                        <button className="px-2 rounded-0 m-0 py-0" onClick={()=>{
                                            decrement(item)
                                        }}>-</button>
                                    </div>
                                </div>
                            </td>
                            <td data-title="Total:">{item.total}$</td>
                        </tr>
                    )
                })}
                <div className="d-flex align-items-center flex-column flex-md-row gap-md-5 py-3 mb-3 down">
                    <span>Subtotal: {calcSubTotal()}$</span>
                    <button onClick={()=>{
                        setCartProds([]);
                    }}>Empty Cart</button>
                    
                </div>
                <div className="d-flex flex-column align-items-center flex-md-row gap-3">
                    <Link to="" className="navigate">Continue Shopping</Link>
                    <Link to="/checkout" onClick={sendToCheckout} className="navigate">Proceed to checkout</Link>
                </div>
            </tbody>
            
        </table>
            </div>)
        }
    }


    function removeProd(prod){
        let index = cartProds.findIndex(object => {
            return object.id === prod.id;
        })

        setCartProds([...cartProds.slice(0, index), ...cartProds.slice(index+1, cartProds.length)]);
    }
    return(
        <>
            <div className="container-fluid top-title d-flex flex-column align-items-center justify-content-center py-4 mb-5">
                <p className="display-6 text-dark">Cart</p>
                <span className="text-secondary d-flex gap-2"><Link to="/home" className="text-secondary">Home</Link> | <Link to="/cart" className="text-secondary">Cart</Link></span>
            </div>
            <div className="container">
                {
                    showCart()
                }
            </div>
        </>
    )
}
