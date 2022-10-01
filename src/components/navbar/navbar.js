import React, {useState, useRef } from "react";
import "./navbar.css";
import NLink from "./link"
import { useDispatch } from "react-redux";
import { VscTwitter } from "react-icons/vsc";
import { BsLinkedin ,BsFillPersonFill} from "react-icons/bs";
import { IoLogoInstagram,IoLogoFacebook } from "react-icons/io5";
import { AiFillYoutube ,AiOutlineShoppingCart } from "react-icons/ai";
import Badge from 'react-bootstrap/Badge';
import { useEffect } from "react";
import SearchBar from "../Search/SearchBar";
import BookData from "../Search/Data.json";
import { HashLink } from "react-router-hash-link";
import { useSelector } from "react-redux";


export default function Navbar(){

    const dispatch = useDispatch()
    let [Topnavbar, setnavelements] = useState([
        { data: "/About Us", content: "About Us" },
        { data: "/Privacy", content: "Privacy" },
        { data: "/FAQ", content: "FAQ" },
        { data: "/Careers", content: "Careers" },
    ]);

    let [Topnavbar_right, setnavelements1] = useState([
        { data1: "/My Wishlist", content1: "My Wishlist" },
        { data1: "/Track Your Order", content1: "Track Your Order" },
        { data1: "/Instagram", content1: <IoLogoInstagram /> },
        { data1: "/Twitter", content1: <VscTwitter /> },
        { data1: "/Facebook", content1: <IoLogoFacebook /> },
        { data1: "/Linkedin", content1: <BsLinkedin /> },
        { data1: "/Youtube", content1: <AiFillYoutube /> },

    ]);

    let [secondnavbar, setnavelements2] = useState([
        { data: "/home", content: "Home" },
        {data: "/favourites", content:"Wishlist"},
        { data: "/products", content: "Products" },
        { data: "/home#trending", content: "Trend" },
        { data: "/home#best-selling", content: "Best Selling"}
    ]);

    const [counter, setCounter] = useState(0);
    const increase = () => {
        setCounter(count => count + 1);
    };

    const inputRef = useRef(null);
    function handleClick() {
        console.log(inputRef.current.value);
    }

    return (
        <>
        
            {/* <div class="topnav">
                            {Topnavbar.map((item) => (
                    <a><NLink data={item.data} content={item.content} /></a>))}
                <div class="topnav-right">
                    {Topnavbar_right.map((items) => (
                        <a><NLink data={items.data1} content={items.content1} /></a>))}
                </div>
            </div>

            <hr></hr>
            <div class="d-flex">
                <div class="p-2  flex-fill">
                    <h1>E-Store</h1>
                </div>
                <div class="p-2  flex-fill">
                    {secondnavbar.map((items) => (
                        <a><NLink data={items.data} content={items.content} /></a>))}
                    <Badge bg="danger" text="wight">
                        New
                    </Badge>
                </div>
                <div class="p-2  flex-fill">
                    <a><SearchBar placeholder="Search..." data={BookData} /></a>
                    <a href="/"><BsFillPersonFill style={{ fontSize: '30px' }} /></a>
                    <HashLink to="/cart"><AiOutlineShoppingCart style={{ fontSize: '30px' }} /><Badge bg="danger" text="wight">
                        <span className="counter__output">{counter}</span>
                    </Badge></HashLink>
                </div>
            </div>

            <div class="d-flex justify-content-center " id="alert">
                <strong>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer</strong ><a href="/" class="alert-link">Shop Now</a>
            </div> */}
            <div class="topnav d-flex align-items-center justify-content-between">
                <div>{Topnavbar.map((item) => (
                    <a><NLink data={item.data} content={item.content} /></a>))}</div>
                <div class="topnav-right">
                    {Topnavbar_right.map((items) => (
                        <a><NLink data={items.data1} content={items.content1} /></a>))}
                </div>
            </div>

            <hr></hr>
            <nav class="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between w-100" id="navv">
                <h1 className="p-2 mr-2">E-Store</h1>
                <button
                    class="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >         
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav d-flex align-items-center gap-1 gap-lg-3 ml-2">
                    {secondnavbar.map((item) => (
                        <HashLink to={item.data}>{item.content}</HashLink>
                    ))}
                </ul>
                <div class="p-2  ">
                    <a><SearchBar placeholder="Search..." data={BookData} /></a>
                    <a href="/"><BsFillPersonFill style={{ fontSize: '30px' }} /></a>
                    <HashLink to="/cart"><AiOutlineShoppingCart style={{ fontSize: '30px' }} /><Badge bg="danger" text="wight">
                        <span className="counter__output">{counter}</span>
                    </Badge></HashLink>
                </div>
                
                {/* <button className="btn btn-primary" onClick={togglelang}>{lang}</button> */}
                </div>
                
            </nav>
            <div class="d-flex justify-content-center " id="alert">
                <strong>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer</strong ><a href="/" class="alert-link">Shop Now</a>
            </div>
            
        </>

    )
}
