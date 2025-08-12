import React, {useRef} from 'react';// , useRef 
// import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

const FarmerRegistration = () => {
    const inputFirstNameRef = useRef(null);
    const inputLastNameRef = useRef(null);
    const inputEmailRef = useRef(null);
    const inputPasswordRef = useRef(null);
    const inputMobileRef = useRef(null);
    const checkBoxTermsRef = useRef(null);
    const btnRef = useRef(null);

    function handleSubmit(e){
        e.preventDefault();
        let first_name = inputFirstNameRef.current.value ;
        let last_name = inputLastNameRef.current.value;
        let email = inputEmailRef.current.value;
        let password = inputPasswordRef.current.value;
        let mobile = inputMobileRef.current.value;
        let checkbox = checkBoxTermsRef.current.value;
        let btn = btnRef.current.value;
        console.log(first_name,last_name,email,password,mobile,checkbox,btn);
    }
    return(
        <React.Fragment>
            <h1>Farmer Registration</h1>
            <form action="#" onSubmit={handleSubmit}>
                First Name :<input type="text" ref={inputFirstNameRef} id="first_name" name="firat_name"/>
                <br/>
                Last Name :<input type="text" ref={inputLastNameRef} id="last_name" name="last_name"/>
                <br/>
                Email :<input type="email" ref={inputEmailRef} id="email" name="email"/>
                <br/>
                Mobile No : <input type="text" ref={inputMobileRef} id="mobile" name="mobile"/>
                <br/>
                Password : <input type="password" ref={inputPasswordRef} id="password" name="password"/> {" "}
                <br/>
                <input type="checkbox" name="is_checked" ref={checkBoxTermsRef} id="is_checked" />
                Accept the term and Conditions

                <NavLink to="/terms-conditions" />
                <br />
                <button type="submit"  ref={btnRef}>Register</button>
            </form>
        </React.Fragment>
    )
};

export default  FarmerRegistration;
