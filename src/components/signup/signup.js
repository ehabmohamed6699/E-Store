import React from "react";
import "./signup.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form"
import Formres from "../form/form";
import Button from "react-bootstrap/esm/Button";
import { useState } from "react";

function Signup (){ 

const [ form, setForm ] =useState({});
const [ errors, setErrors ] = useState({});

const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value
    })
    
    if ( !!errors[field] ) setErrors({
        ...errors,
        [field]: null
      })
  }
  const logapi=async()=>{
    fetch('https://jsonplaceholder.typicode.com/users',{
      method:'GET',
  })
      .then(res=>res.json())
      .then(json=>{
    let selected= json.filter((item)=>item.email===form.email);

 if  (!selected || selected.length===0){
  fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    email:form.email,
    phone:form.password,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
.then(alert('your data was submitted successfully'))
  .then((response) => response.json())
  .then((json) => console.log(json))
  .then(alert('your data was submitted successfully'));
 }
 else {
  let pswerror={};
  pswerror.email="email already exists ,please login"
  console.log(pswerror.email);
    setErrors(pswerror);
    console.log(errors);
}
      })
  }

function emailValidation(email){
    let flag=0;
// console.log(email);
for (let i=0 ;i<email.length;i++) {
   

  if (email[i]==="@" && i!==0){
    flag=1;
   
    }
}

if (flag===1)
    return true;
};



  const findFormErrors = () => {
    const { email, password ,cpwd,name} = form
    const newErrors = {}
    if ( !name || name === '' ) newErrors.name = 'cannot be blank!'
    if ( !email || email === '' ) newErrors.email = 'cannot be blank!'
    else if ( emailValidation(email)!==true ) newErrors.email = 'email format is wrong , please enter valid email'
    
    
  if ( !password || password === '' ) newErrors.password = 'cannot be blank!'
   else if (password.length<8) newErrors.password = 'password must be more than or equal 8 character'
   if ( !cpwd || cpwd === '' ) newErrors.cpwd = 'cannot be blank!'
   else if (cpwd!==password) newErrors.cpwd = "Password doesn't match"
    return newErrors;
}


const handleSubmit = e => {
    
    e.preventDefault()

    const newErrors = findFormErrors()
   
    if ( Object.keys(newErrors).length > 0 ) {
    
     setErrors(newErrors)
    } else {
    logapi();
      // alert('log in done')
    }
  }

  
    return (
        
        <>
        <div class="out">
        <div class="inner w-50 ">
            <header >
                
                  <h2 >Sign Up</h2>
                
                <h6>Create your account to get full access</h6>  
                
                
            </header>

            <section class="m-4 h-50 formarea" >
                    <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Full Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name"  onChange={ e => setField('name', e.target.value)} isInvalid={ !!errors.name } />
                <Form.Control.Feedback type='invalid'>
                { errors.name }
                </Form.Control.Feedback>
            </Form.Group>
            {/* <Validation data="name" placeholder="name" />
            <Validation data="email" placeholder="enter your email"/> */}


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="email" onChange={ e => setField('email', e.target.value)} isInvalid={ !!errors.email }/>
                <Form.Control.Feedback type='invalid'>
                { errors.email }
                </Form.Control.Feedback>
            </Form.Group>

            {/* <Validation data="password" placeholder="enter your password"/>
            <Validation data="password" placeholder="confirm password"/> */}
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ e => setField('password', e.target.value)}  isInvalid={ !!errors.password }/>
                <Form.Control.Feedback type='invalid'>
                { errors.password }
                </Form.Control.Feedback>  
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" placeholder="Confirm Password" onChange={ e => setField('cpwd', e.target.value)}  isInvalid={ !!errors.cpwd }/>
                <Form.Control.Feedback type='invalid'>
                { errors.cpwd }
                </Form.Control.Feedback>  
            </Form.Group>

            </Form>



            </section>
            <div class="footer p-4">
               <section class=" row">
                <div class="col-lg-7 col-md-7 col-sm-10 col-xs-10">

                
            <Formres data="Already have an account?" page="Login" button="Sign up" des="/Login" fun="handleSubmit"/>
          </div>
            <div class="col-lg-5 col-md-5 col-sm-10 col-xs-10 d-flex justify-content-lg-end justify-content-lg-end justify-content-md-start">
            <Button variant="primary" type="submit" onClick={handleSubmit} className="w-50 " style={{background:"rgb(233, 236, 38)",color:"black",border:"none"}}>
                        Sign Up
                       
                    </Button> 
                </div>
               
            </section>  
        </div>

            </div>

            </div>
        </>
    );
    }

export default Signup;
