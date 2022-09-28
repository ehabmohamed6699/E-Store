import "./form.css"
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/esm/Button";
import Validation from "../validation/validation";
// import { ReactDOM } from "react";

const Formres =(props)=>{
// console.log(props.fun);
    return (
        <>
        
            <div class="footer p-4">
               <section class=" row">
                <h6 class="col-lg-7 col-md-7 col-sm-10 col-xs-10" >{props.data} <a href={props.des} class="a">{props.page}</a> here</h6>
                <div class="col-lg-5 col-md-5 col-sm-10 col-xs-10 d-flex justify-content-lg-end justify-content-lg-end justify-content-md-start">
                
                </div>
               
            </section>  
        </div>

        </>
    );
}
export default Formres;