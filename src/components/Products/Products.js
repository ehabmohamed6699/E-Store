
import { useRef, useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Products.css";
import Dropdown from "react-bootstrap/Dropdown";
import Form from "react-bootstrap/Form";
import Slider from "@mui/material/Slider";
import Checkbox from "@mui/material/Checkbox";
import { useSelector, useDispatch } from "react-redux";
import initialState from "../../store/reducer";
import { addToFav, addToCart } from "../../store/action";
import useStateWithCallback from 'use-state-with-callback';

function Products() {
  const dispatch = useDispatch();
  let [favList, setFavList] = useState(
    useSelector((state) => state.favourites)
  );
  let [prodcts, setprodcts] = useState([]);
  let [filter, setfilter] = useState(prodcts);
  let [result, setresult] = useState(prodcts);

  let category_bool = false;
  let [category, setcategory] = useState(prodcts);
  let price_bool = false;
  let [price, setprice] = useState(prodcts);
  let rate_bool = false;
  let [rate, setrate] = useState(prodcts);
  const brand_bool = false;
  let [brand, setbrand] = useState(prodcts);


  let [categoryFilter, setCategoryFilter] = useStateWithCallback("All", ()=>{
    filterizedData();
  })
  let [priceFilter, setPriceFilter] = useState({min: 0, max: 2000})
  let [brandsFilter, setBrandsFilter] = useState(new Set())
  let [arrange, setArrange] = useStateWithCallback("", ()=>{
    filterizedData();
  })

  //Filtering By Price
  const [value, setValue] = useState([0, 2000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    getPrice(newValue[0], newValue[1]);
  };

  let filterizedData = function(){
    let tempData = [];
    for(let item of prodcts){
      tempData.push(item);
    }
    if(categoryFilter !== "All"){
      tempData = tempData.filter(item => item.category == categoryFilter);
    }
    tempData = tempData.filter(item => item.price >= priceFilter.min && item.price <= priceFilter.max)
    if (brandsFilter.size != 0){
      tempData = tempData.filter(item => brandsFilter.has(item.brand));
    }

    if(arrange != ""){
      if (arrange == "Ascending"){
        tempData = tempData.sort((a,b) => {
          return a.rating - b.rating;
        })
      } else if (arrange == "Descending"){
        tempData = tempData.sort((a,b) => {
          return b.rating - a.rating;
        })
      }
    }
    setfilter(tempData)
  }

  const getPrice = (start, end) => {
    setPriceFilter({...priceFilter, min:start, max:end});
    console.log(priceFilter)
    filterizedData();
    console.log(filter)
  };

  //Filtering By Brand
  const getBrand = (brand) => {
    brandsFilter.has(brand)? brandsFilter.delete(brand) : brandsFilter.add(brand);
    setBrandsFilter(brandsFilter);
    console.log(brandsFilter)
    filterizedData()
  };
  const handleOnChange = (b) => {
    //    if (!ch) {
    //     ch = true;
    getBrand(b);
    // }
  };

  //Filtering By Category
  const filterProduct = (catItem) => {
    console.log(catItem)
    setCategoryFilter(catItem);
    console.log(categoryFilter);
    
    // filterizedData();
  };


  //Fetch Data
  function fetchData() {
    axios
      .get("https://dummyjson.com/products")
      .then((prodData) => {
        setprodcts(prodData.data.products);
        setfilter(prodData.data.products);
        // console.log(prodData.data.products);
        // if (ShowAll) {
          

        //   ShowAll = false;
        // }
        // if (price_bool) {
        //   price.map((x) => result.push(x));
        //   //  result.push(price)
        // }
        // if (rate_bool) {
        //   rate.map((x) => result.push(x));
        //   // result.push(rate)
        // }
        // if (brand_bool) {
        //   brand.map((x) => result.push(x));
        //   //  result.push(brand)
        // }
        // if (category_bool) {
        //   category.map((x) => result.push(x));
        //   //  result.push(category)
        // }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //UseEffect function
  const btnMobileNavRef = useRef(null);
  const sectionFilterRef = useRef(null);

  useEffect(() => {
    const btnNav = btnMobileNavRef.current;
    const sectionFilter = sectionFilterRef.current;
    btnNav.addEventListener("click", () => {
      sectionFilter.classList.toggle("filter-open");
    });
    fetchData();
  }, []);

  //   MAKING MOBILE FILTERING
  //   const btnNavEl = document.querySelector(".btn-mobile-nav");
  //   const elem = document.querySelector(".section-filter");
  //   btnNavEl.addEventListener("click", () => {
  //     elem.classList.toggle("filter-open");
  //   });

  return (
    <div className="section">
      <button ref={btnMobileNavRef} class="btn-mobile-nav">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon-mobile-nav icon-filter"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="icon-mobile-nav icon-close"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <div
        ref={sectionFilterRef}
        className="container-fuild p-3 my-3 section-filter"
      >
        <div className="row product-layout">
          <div className="col-3 filter-col ">
            <div className="filter-wrapper">
              <div className="CategoryFilter">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Category
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => filterProduct("All")}>
                      All
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProduct("smartphones")}>
                      smartphones
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProduct("laptops")}>
                      laptops
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProduct("skincare")}>
                      skincare
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProduct("groceries")}>
                      groceries
                    </Dropdown.Item>
                    <Dropdown.Item
                      onClick={() => filterProduct("home-decoration")}
                    >
                      home-decoration
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => filterProduct("fragrances")}>
                      fragrances
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Rating
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => getrate("1")}>
                      {" "}
                      1
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => getrate("2")}>
                      {" "}
                      2
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => getrate("3")}>
                      {" "}
                      3
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => getrate("4")}>
                      {" "}
                      4
                    </Dropdown.Item>
                    <Dropdown.Item onClick={() => getrate("5")}>
                      {" "}
                      5
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown> */}
              </div>
            </div>

            <div className="PriceFilter">
              <h5>Filter by Price</h5>

              <Slider
                className="slider"
                size="small"
                value={value}
                onChange={handleChange}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                // color="danger"
                step={50}
                min={0}
                max={2000}
              />
            </div>

            <div className="BrandFilter">
              <h5>Filter by Brand</h5>
              <Form className="brand">
                {["checkbox"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Apple"}
                      onChange={() => handleOnChange("Apple")}
                      // onChange={() => handleOnChange("APPle")}
                    />

                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Samsung"}
                      onChange={() => handleOnChange("Samsung")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Microsoft Surface"}
                      onChange={() => handleOnChange("Microsoft Surface")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Infinix"}
                      onChange={() => handleOnChange("Infinix")}
                    />

                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={" HP Pavilion"}
                      onChange={() => handleOnChange("HP Pavilion")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Huawei"}
                      onChange={() => handleOnChange("Huawei")}
                    />

                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Impression of Acqua Di Gio"}
                      onChange={() =>
                        handleOnChange("Impression of Acqua Di Gio")
                      }
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"OPPO"}
                      onChange={() => handleOnChange("OPPO")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Bake Parlor Big"}
                      onChange={() => handleOnChange("Bake Parlor Big")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Royal_Mirage"}
                      onChange={() => handleOnChange("Royal_Mirage")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Fog Scent Xpressio"}
                      onChange={() => handleOnChange("Fog Scent Xpressio")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Al Munakh"}
                      onChange={() => handleOnChange("Al Munakh")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Lord - Al-Rehab"}
                      onChange={() => handleOnChange("Lord - Al-Rehab")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"L'Oreal Paris"}
                      onChange={() => handleOnChange("L'Oreal Paris")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Hemani Tea"}
                      onChange={() => handleOnChange("Hemani Tea")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Dermive"}
                      onChange={() => handleOnChange("Dermive")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"ROREC White Rice"}
                      onChange={() => handleOnChange("ROREC White Rice")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Fair & Clear"}
                      onChange={() => handleOnChange("Fair & Clear")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Saaf & Khaas"}
                      onChange={() => handleOnChange("Saaf & Khaas")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Bake Parlor Big"}
                      onChange={() => handleOnChange("Bake Parlor Big")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Baking Food Items"}
                      onChange={() => handleOnChange("Baking Food Items")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"fauji"}
                      onChange={() => handleOnChange("fauji")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Dry Rose"}
                      onChange={() => handleOnChange("Dry Rose")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Boho Decor"}
                      onChange={() => handleOnChange("Boho Decor")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Flying Wooden"}
                      onChange={() => handleOnChange("Flying Wooden")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"LED Lights"}
                      onChange={() => handleOnChange("LED Lights")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"luxury palace"}
                      onChange={() => handleOnChange("luxury palace")}
                    />
                    <Form.Check
                      type={type}
                      id={`default-${type}`}
                      label={"Golden"}
                      onChange={() => handleOnChange("Golden")}
                    />
                  </div>
                ))}
              </Form>
            </div>

            <div className="RateFilter">
              <h5>Sort by Rating</h5>
              <Form className="rate">
                {["radio"].map((type) => (
                  <div key={`default-${type}`} className="mb-3">
                    <Form.Check
                      className="sorting"
                      custom
                      label="Ascending"
                      name="group1"
                      type={type}
                      id={`default-${type}-1`}
                      onClick={() => {
                        setArrange("Ascending")
                        // filterizedData()
                      }}
                    />
                    <Form.Check
                      className="sorting"
                      label="Descending"
                      name="group1"
                      type={type}
                      id={`default-${type}-2`}
                      onClick={() => {
                        setArrange("Descending")
                      }}
                    />
                  </div>
                ))}
              </Form>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 col-sm-12">
            <div className="row row-prod">
              {filter.map((product) => (
                <div
                  className="my--card prod-card"
                  key={product.id}
                  style={{ width: "18rem" }}
                >
                  <div className="img-wrapper">
                    <img
                      className="my-card-img"
                      src={product.thumbnail}
                      alt="Card image cap"
                    />
                  </div>
                  <div className="card-body">
                    <Link
                      style={{ color: "#333", textDecoration: "none" }}
                      to={`/productDetails/${product.id}`}
                    >
                      <h5 className="my-card-title">{product.title}</h5>
                    </Link>

                    <div className="price">
                      <span className="price-before-discount">
                        $
                        {Math.round(
                          product.price -
                            product.price * (product.discountPercentage * 0.01)
                        )}
                        &nbsp;
                      </span>
                      <span className="price-after-discount">
                        ${product.price}
                      </span>
                    </div>
                    <div className="card-icons">
                      <button
                        className="btn-wish-list"
                        onClick={() => {
                          dispatch(addToCart(product));
                          console.log("add to cart");
                          console.log(product.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="card-icon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                          />
                        </svg>
                      </button>

                      <button
                        className="btn-wish-list"
                        onClick={() => {
                          dispatch(addToFav(product));
                          console.log("clicked");
                          console.log(product.id);
                        }}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          class="card-icon"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                      </button>
                      <Link
                        style={{ color: "#333", textDecoration: "none" }}
                        to={`/productDetails/${product.id}`}
                      >
                        <button>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="card-icon"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607zM10.5 7.5v6m3-3h-6"
                            />
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
              {console.log(result)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Products;
