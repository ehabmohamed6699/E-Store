import "./validation.css"
// import "./login.css";
import "bootstrap/dist/css/bootstrap.min.css"
import Form from "react-bootstrap/Form"
// import Formres from "../form/form"
import { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Signup from "../signup/signup";

// import Signup from "../signup/signup";



const Validation=(props)=>{
    let datain= props.data ;
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
        console.log(datain);
        
        if ( !email || email === '' ) newErrors.datain = 'cannot be blank!'
        else if ( emailValidation(email)!==true ) newErrors.datain = 'email format is wrong , please enter valid email'
        
        
    //   if ( !password || password === '' ) newErrors.datain = 'cannot be blank!'
       if (password.length<8) newErrors.datain = 'password must be more than or equal 8 character'
    
        return newErrors;
    }
    
    
    const handleSubmit = e => {
         
         debugger;
        e.preventDefault()
    
        const newErrors = findFormErrors()
       
        if ( Object.keys(newErrors).length > 0 ) {
         setErrors(newErrors);
        //  console.log(errors);
        } else {
            //  console.log(datain);
        
          alert('log in done')
        }
      } 
    
      return (
      <>
        
      <Form.Group className="mb-3" controlId="formBasicEmail" >
          <Form.Label>{props.data}</Form.Label>
          <Form.Control type={props.data} placeholder={props.placeholder} onChange={ e => setField('props.data', e.target.value) } isInvalid={ !!errors.datain }/>
        
          <Form.Control.Feedback type='invalid'>
          { errors.datain }
        </Form.Control.Feedback>
      </Form.Group>
        {/* <Signup handleSubmit="handleSubmit" /> */}
      </>);
}
export default Validation;