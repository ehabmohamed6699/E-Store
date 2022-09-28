import React from "react";
import { useSelector } from "react-redux";
import "./checkout.css"
import { Link } from "react-router-dom";

export default function Checkout(){
    //this is some random note
    let myCheck = useSelector((state) => state.checkout);
    function fillCheckout(){
        if(myCheck.cart.length == 0){
            return(
                <>
                <p className="display-3 mb-3 text-center">You have no pending orders</p>
                <Link to="" className="navigate" style={{width: "fit-content", margin: "0 auto"}}>Continue Shopping</Link>
                </>
            )
        } else{
            return(<div className="container needs-validation" novalidate>
            <div className="row">
                <div className="col-lg-7">
                    <p className="display-6">Billing Details</p>
                    <form className="mb-5 mb-lg-0">
                        <div class="row">
                            <div class="col">
                            <input type="text" class="form-control" placeholder="First name" required/>
                            </div>
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Last name" required/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <input type="email" class="form-control" placeholder="Email Address" required/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                            <input type="tel" class="form-control" placeholder="Phone Number 1" required/>
                            </div>
                            <div class="col">
                                <input type="tel" class="form-control" placeholder="Phone Number 2 (Optional)"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Address" required/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="Town/City" required/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <input type="text" class="form-control" placeholder="ZIP Code" required/>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="order-notes">Order Notes</label>
                            <textarea class="form-control mb-3" id="order-notes" rows="3"></textarea>
                        </div>
                        <button className="checkout-btn" type="submit" >Proceed</button>
                    </form>
                </div>
                <div className="col-lg-4">
                    <div className="bill p-3 rounded-2 d-flex flex-column">
                        <p className="title">Your Bill</p>
                        <ul>
                            <li className="text-muted border-bottom">
                                <p>Product</p>
                                <p>Total</p>
                            </li>
                            {myCheck.cart.map(item =>{
                                return(<>
                                    <li className="text-muted border-bottom">
                                        <p>{item.title}</p>
                                        <p className="text-dark">x{item.quantity}</p>
                                        <p>{item.total}$</p>
                                    </li>
                                </>)
                            })}
                            <li className="text-muted border-bottom">
                                <p className="text-dark">Subtotal:</p>
                                <p>{myCheck.subTotal}$</p>
                            </li>
                            <li className="text-muted border-bottom">
                                <p className="text-dark">Shipping:</p>
                                <p>10$</p>
                            </li>
                            <li className="text-muted">
                                <p className="text-dark">Total:</p>
                                <p>{myCheck.subTotal + 10}$</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>)
        }
    }
    return(<>
        {console.log(Math.floor(5))}
        <div className="container-fluid top-title d-flex flex-column align-items-center justify-content-center py-4 mb-5">
            <p className="display-6 text-dark">Checkout</p>
            <span className="text-secondary"><Link to="#" className="text-secondary">Home</Link> | <Link to="#" className="text-secondary">Cart</Link></span>
        </div>
        {
            fillCheckout()
        }
    </>)
}