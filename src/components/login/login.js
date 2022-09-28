import React from "react";
import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
import Formres from "../form/form"
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
function Login (){
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
    const { email, password } = form
    const newErrors = {}
    
    if ( !email || email === '' ) newErrors.email = 'cannot be blank!'
    else if ( emailValidation(email)!==true ) newErrors.email = 'email format is wrong , please enter valid email'
    
    
  if ( !password || password === '' ) newErrors.password = 'cannot be blank!'
   else if (password.length<8) newErrors.password = 'password must be more than or equal 8 character'

    return newErrors;
}


const handleSubmit = e => {
    
    e.preventDefault()

    const newErrors = findFormErrors()
   
    if ( Object.keys(newErrors).length > 0 ) {
    
     setErrors(newErrors)
    } else {
    
      alert('log in done')
    }
  }




return (

    <>
    <div class="outer">
        <div class="ineer w-50 ">
            <header >
                
                  <h2 >LogIn</h2>
                
                <h6>Enter Login details to get access</h6>  
                
                
            </header>
            <section class="m-4 h-50" >
                    <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail" >
                <Form.Label>Email Or username</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={ e => setField('email', e.target.value)} isInvalid={ !!errors.email }/>
              
                <Form.Control.Feedback type='invalid'>
                { errors.email }
    </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={ e => setField('password', e.target.value)}  isInvalid={ !!errors.password }/>
                <Form.Control.Feedback type='invalid'>
                { errors.password }
    </Form.Control.Feedback>            
            </Form.Group>
            <div class="row mt-4">
            <Form.Group className="mb-3 col-lg-6 col-md-6 col-sm-10 col-xs-10" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Keep Me Logged In" />
            </Form.Group>
            <div   class="mb-3 col-lg-6 col-md-6 col-sm-10 col-xs-10 d-flex justify-content-lg-end justify-content-lg-end justify-content-md-start">
                   <Button variant="primary" type="submit" onClick={handleSubmit} className="w-50 " style={{background:"#ff2020",color:"white",border:"none"}}>
                        Submit
                    </Button>
            </div>
        
            </div>
      
    </Form>



            </section>
           <Formres data="Don't have an account?" page=" Sign Up" des="/Signup"  />
            
           
        </div>

    </div>
    </>
);
}

export default Login;