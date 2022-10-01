import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Products.css";
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Slider from '@mui/material/Slider';
import Checkbox from '@mui/material/Checkbox';

function Products() {
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


    // function intercept(...items) {
    //     let setsOfItems = [];
    //     for (let i of items) {
    //         setsOfItems.push(new Set(i));
    //     }
    //     let intersection = new Set(setsOfItems[0])
    //     for (let i = 1; i < setsOfItems.length - 1; i++) {
    //         intersection = new Set([...intersection].filter(x => setsOfItems[i + 1].has(x)))
    //     }
    //     return Array.from(intersection);
    // }

    //Filtering By Price
    const [value, setValue] = useState([0, 2000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
        getPrice(newValue[0], newValue[1])
    };

    const getPrice = (start, end) => {
        setfilter(prodcts)
        const updateList = prodcts.filter((x) => {
            return ((x.price <= end) && (x.price >= start))
        });
        // updateList.map((p) => {
        //     return p.id
        // }
        // )
        setfilter(updateList)
        setprice(updateList);
        price_bool = true;
        console.log(updateList)
    }

    //Filtering By Brand
    const getBrand = (brand) => {
        setfilter(prodcts)
        const updateList = prodcts.filter((x) => {
            return (x.brand === brand)
        })
        setfilter(updateList)
        setbrand(updateList);
    }
    const handleOnChange = (b) => {
        //    if (!ch) {
        //     ch = true;
        getBrand(b);
        // }
    };

    //Filtering By Category 
    let ShowAll = true
    const filterProduct = (catItem) => {
        setfilter(prodcts)
        if (catItem != "All") {
            const updateList = prodcts.filter((x) => {
                return x.category === catItem
            });
            setfilter(updateList);
            setcategory(updateList);
            category_bool = true;
            //  console.log(filter)
        }
    }

    //Filtering By Rating
    //Sort Descinding
    const Descending = () => {
        setfilter(prodcts)
        const updateList = prodcts.sort((a, b) => {
            return b.rating - a.rating
        });
        setfilter(updateList);
        console.log(filter)
        console.log(updateList)
    }
    //Sort Ascending
    const Ascending = () => {
        setfilter(prodcts)
        const updateList = prodcts.sort((a, b) => {
            return a.rating - b.rating
        });
        setfilter(updateList);
        console.log(filter)
    }
    //Filtering By Rating
    const getrate = (rate) => {
        setfilter(prodcts)
        const updateList = prodcts.filter((x) => {
            return (x.rating <= rate)
        })
        setfilter(updateList)
        setrate(updateList)
        rate_bool = true;
    }

    //Fetch Data
    function fetchData() {
        axios.get('https://dummyjson.com/products')
            .then((prodData) => {
                setprodcts(prodData.data.products);
                console.log(prodData.data.products)
                if (ShowAll) {
                    setfilter(prodData.data.products);

                    ShowAll = false;
                }
                if (price_bool) {
                    price.map((x) => (
                        result.push(x)
                    ))
                    //  result.push(price)
                }
                if (rate_bool) {
                    rate.map((x) => (
                        result.push(x)
                    ))
                    // result.push(rate)
                }
                if (brand_bool) {
                    brand.map((x) => (
                        result.push(x)

                    ))
                    //  result.push(brand)
                }
                if (category_bool) {
                    category.map((x) => (
                        result.push(x)
                    ))
                    //  result.push(category)
                }

            })
            .catch((err) => {
                console.log(err);
            })
    }
    //UseEffect function
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className="container-fuild p-3 my-3">
                <div className="row">
                    <div className="col-sm-2" >

                        <div className="CategoryFilter">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Category
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => filterProduct('All')}>All</Dropdown.Item>
                                    <Dropdown.Item onClick={() => filterProduct('smartphones')}>smartphones</Dropdown.Item>
                                    <Dropdown.Item onClick={() => filterProduct('laptops')} >laptops</Dropdown.Item>
                                    <Dropdown.Item onClick={() => filterProduct('skincare')}>skincare</Dropdown.Item>
                                    <Dropdown.Item onClick={() => filterProduct('groceries')}>groceries</Dropdown.Item>
                                    <Dropdown.Item onClick={() => filterProduct('home-decoration')}>home-decoration</Dropdown.Item>
                                    <Dropdown.Item onClick={() => filterProduct('fragrances')}>fragrances</Dropdown.Item>

                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    Rating
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => getrate('1')}> 1</Dropdown.Item>
                                    <Dropdown.Item onClick={() => getrate('2')}> 2</Dropdown.Item>
                                    <Dropdown.Item onClick={() => getrate('3')}> 3</Dropdown.Item>
                                    <Dropdown.Item onClick={() => getrate('4')}> 4</Dropdown.Item>
                                    <Dropdown.Item onClick={() => getrate('5')} > 5</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>

                        </div>

                        <div className="PriceFilter">
                            <h5>Filter by Price</h5>

                            <Slider className="slider"
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="on"
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
                                {['checkbox'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Apple'}
                                            onChange={() => handleOnChange('Apple')}
                                        // onChange={() => handleOnChange("APPle")}

                                        />

                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Samsung'}
                                            onChange={() => handleOnChange('Samsung')}

                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Microsoft Surface'}
                                            onChange={() => handleOnChange('Microsoft Surface')}

                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={'Infinix'}
                                            onChange={() => handleOnChange('Infinix')}

                                        />

                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={' HP Pavilion'}
                                            onChange={() => handleOnChange('HP Pavilion')}

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
                                            onChange={() => handleOnChange('Impression of Acqua Di Gio')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"OPPO"}
                                            onChange={() => handleOnChange('OPPO')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Bake Parlor Big"}
                                            onChange={() => handleOnChange('Bake Parlor Big')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Royal_Mirage"}
                                            onChange={() => handleOnChange('Royal_Mirage')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Fog Scent Xpressio"}
                                            onChange={() => handleOnChange('Fog Scent Xpressio')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Al Munakh"}
                                            onChange={() => handleOnChange('Al Munakh')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Lord - Al-Rehab"}
                                            onChange={() => handleOnChange('Lord - Al-Rehab')}
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
                                            onChange={() => handleOnChange('Hemani Tea')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Dermive"}
                                            onChange={() => handleOnChange('Dermive')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"ROREC White Rice"}
                                            onChange={() => handleOnChange('ROREC White Rice')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Fair & Clear"}
                                            onChange={() => handleOnChange('Fair & Clear')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Saaf & Khaas"}
                                            onChange={() => handleOnChange('Saaf & Khaas')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Bake Parlor Big"}
                                            onChange={() => handleOnChange('Bake Parlor Big')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Baking Food Items"}
                                            onChange={() => handleOnChange('Baking Food Items')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"fauji"}
                                            onChange={() => handleOnChange('fauji')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Dry Rose"}
                                            onChange={() => handleOnChange('Dry Rose')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Boho Decor"}
                                            onChange={() => handleOnChange('Boho Decor')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Flying Wooden"}
                                            onChange={() => handleOnChange('Flying Wooden')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"LED Lights"}
                                            onChange={() => handleOnChange('LED Lights')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"luxury palace"}
                                            onChange={() => handleOnChange('luxury palace')}
                                        />
                                        <Form.Check
                                            type={type}
                                            id={`default-${type}`}
                                            label={"Golden"}
                                            onChange={() => handleOnChange('Golden')}
                                        />

                                    </div>
                                ))}
                            </Form>
                        </div>

                        <div className="RateFilter">
                            <h5>Sort by Rating</h5>
                            <Form className="rate">
                                {['radio'].map((type) => (
                                    <div key={`default-${type}`} className="mb-3">

                                        <Form.Check className="sorting"
                                            custom
                                            label="Ascending"
                                            name="group1"
                                            type={type}
                                            id={`default-${type}-1`}
                                            onClick={() => Ascending()}

                                        />
                                        <Form.Check className="sorting"

                                            label="Descending"
                                            name="group1"
                                            type={type}
                                            id={`default-${type}-2`}
                                            onClick={() => Descending()}

                                        />

                                    </div>
                                ))}
                            </Form>
                        </div>

                    </div>

                    <div className="col-xl-9">
                        <div className="row">

                            {filter.map((p) => (
                                <div
                                    className="card col-3"
                                    style={{ width: 300, marginBottom: 10, marginRight: 3 }}                                >
                                    <img class="card-img-top"
                                        src={p.images[0]}
                                        alt="Card image" />
                                    <div class="card-body">
                                        <Link to={`/productDetails/${p.id}`}>{p.title}</Link>
                                        <p class="card-text"></p>

                                    </div>
                                </div>
                            ))}
                            {
                                console.log(result)
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}
export default Products;
