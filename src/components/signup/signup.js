import React from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form"
import Formres from "../form/form";
import Validation from "../validation/validation";
import Button from "react-bootstrap/esm/Button";
function Signup (props){
    
    return (
    
        <>
        <div class="out">
        <div class="inner w-50 ">
            <header >
                
                  <h2 >Sign Up</h2>
                
                <h6>Create your account to get full access</h6>  
                
                
            </header>

            <section class="m-4 h-50" >
                    <Form>
            {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
               
            </Form.Group> */}
            <Validation data="name" placeholder="name" />
            <Validation data="email" placeholder="enter your email"/>


            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" />
            </Form.Group> */}
            <Validation data="password" placeholder="enter your password"/>
            <Validation data="password" placeholder="confirm password"/>
            {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group> */}

{/* 
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group> */}

            </Form>



            </section>
            <Formres data="Already have an account?" page="Login" button="Sign up" des="/Login" fun="handleSubmit"/>
            <div   class="mb-3 col-lg-6 col-md-6 col-sm-10 col-xs-10 d-flex justify-content-lg-end justify-content-lg-end justify-content-md-start">
                   {/* <Button variant="primary" type="submit" onClick={props.data} className="w-50 " style={{background:"#ff2020",color:"white",border:"none"}}>
                        Submit
                    </Button> */}
                  
            </div>
            </div>

            </div>
        </>
    );
    }

export default Signup;