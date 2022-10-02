import React from "react";
import './footer.css';
import {FaFacebook,FaInstagram,FaYoutube,FaHeart} from "react-icons/fa";
import { useState} from "react";
import FootLink from "./footLink";



function Footer() {

    let[categories]= useState(
        [
            {content: "smartphones",data:"/smartphones"},
            {content: "laptops",data:"/"}, 
            {content:  "fragrances",data:"/"},
            {content: "skincare",data:"/"},
            {content: "groceries",data:"/"},
            {content:"home-decoration",data:"/"},
            {content: "tops",data:"/"},
            {content:  "womens-dresses",data:"/"},
            {content: "womens-shoes",data:"/"},
            {content:"mens-shirts",data:"/"},
            {content: "mens-shoes",data:"/"},
            {content:  "mens-watches",data:"/"},
            {content:"womens-watches",data:"/"},
            {content:  "womens-bags",data:"/"},
            {content: "womens-jewellery",data:"/"},
            {content: "sunglasses",data:"/"},
            {content:  "automotive",data:"/"},
            {content: "motorcycle",data:"/"},
            {content:  "lighting",data:"/"}
    ]);



    console.log(categories);

    return(

        <footer>
                   
        <div className='footer-wrapper '>
            <div className='footer-area footer-padding'>

                <section className='contact-area'>
                    <div className='container'>
                        <div className='row justify-content-between contact-padding'>
                            <div className='col-xxl-3 col-xl-3 col-lg-4'>
                                <div className='contact-caption'>
                                    <h3>Contact us</h3>
                                    
                                </div>
                            </div>
                            <div className='col-xxl-5 col-xl-6 col-lg-7 col-md-9'>
                            <div className='contact-caption'>
                                <form action="http://localhost:3000/#">
                                <input type="text" placeholder="Enter your email"/>
                                <button className="contact-btn text-light">Submit</button>
                                </form>   
                            </div>
                            </div>
                            <div className="col-xxl-2 col-xl-2 col-lg-4">       
                            <div className="footer-social">
                                <a href="http://localhost:3000/#" className="text-light"><FaFacebook className="icon"/></a>
                                <a href="http://localhost:3000/#" className="text-light"><FaInstagram className="icon"/></a>
                                <a href="http://localhost:3000/#" className="text-light"><FaYoutube className="icon"/></a>
                            </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className='container'>

                    <div className='row justify-content-between'>
                        <div className="col-xl-3 col-lg-3 col-md-6 col-sm-8">
                            <div className="single-footer-caption mb-50">
                                <div className="single-footer-caption mb-20">
                                    <div className="footer-logo mb-35">
                                        <a href="/home" className="text-light">                                  
                                        <h1 className="p-2 mr-2">E-Store</h1>                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='row justify-content-between'>
                        
                        <div className="footer-tittle">
                            <ul className="nav justify-content-center">
                            {categories.map((element)=>(
                                <FootLink className={["nav-item","nav-link"]} content={element.content} data={element.data}/>
                            ))}
                            </ul>
                        </div>                               
                    </div>

                </div>

                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row">
                                <div className="col-xl-12 ">
                                    <div className="footer-copy-right text-center">
                                        <p>Copyright © All rights reserved | This template is made with {<FaHeart className="heart"/>} </p>
                                    </div>
                                </div> 
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </footer>
    )
}


export default Footer;