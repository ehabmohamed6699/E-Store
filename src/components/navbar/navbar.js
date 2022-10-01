import React, {useState, useRef } from "react";
import "./navbar.css";
import NLink from "./link"
import { useDispatch } from "react-redux";
import { VscTwitter } from "react-icons/vsc";
import { BsLinkedin ,BsFillPersonFill} from "react-icons/bs";
import { IoLogoInstagram,IoLogoFacebook } from "react-icons/io5";
import { AiFillYoutube ,AiOutlineShoppingCart } from "react-icons/ai";
import Badge from 'react-bootstrap/Badge';
import Carousel from "react-bootstrap/Carousel";
import SearchBar from "../Search/SearchBar";
import BookData from "../Search/Data.json";


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
        { data: "/Home", content: "Home" },
        { data: "/Men", content: "Men" },
        { data: "/Women", content: "Women" },
        { data: "/Electronics", content: "Electronics" },
        { data: "/Contact", content: "Contact" },
        { data: "/Baby", content: "Baby" },
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
        
            <div class="topnav">
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
                    {/* <div className="btn__container">
                        <button className="control__btn" onClick={increase}>+</button>
                    </div> */}
                    <a href="/"><AiOutlineShoppingCart style={{ fontSize: '30px' }} /><Badge bg="danger" text="wight">
                        <span className="counter__output">{counter}</span>
                    </Badge></a>
                </div>
            </div>

            <div class="d-flex justify-content-center " id="alert">
                <strong>Sale Up To 50% Biggest Discounts. Hurry! Limited Perriod Offer</strong ><a href="/" class="alert-link">Shop Now</a>
            </div>
            <Carousel className="Carousel">
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/surprised-happy-girl-pointing-left-recommend-product-advertisement-make-okay-gesture_176420-20191.jpg?w=996&t=st=1664147388~exp=1664147988~hmac=591e5e7181cc47d1a7d328fd0a625b4ce61cb0baa1fb669f77710541c29e2be0"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://img.freepik.com/free-photo/portrait-handsome-smiling-young-man-model-wearing-casual-summer-pink-clothes-fashion-stylish-man-posing_158538-5355.jpg?w=900&t=st=1664147445~exp=1664148045~hmac=7d7ee1c6b203295c742fa5b88f7ea2be4b477f58db12dee9fee3ed4be1f4a207"
                    />
                </Carousel.Item>
            </Carousel>

        </>

    )
}
