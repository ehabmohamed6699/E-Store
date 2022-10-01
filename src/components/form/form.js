import "./form.css"



const Formres =(props)=>{
// console.log(props.fun);
    return (
        <>
                <h6 >{props.data} <a href={props.des} class="a">{props.page}</a> here</h6>
        </>
    );
}
export default Formres;