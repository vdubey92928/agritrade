import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <React.Fragment>
            <nav>
                <Link to="/">Home</Link> | 
                <Link to="/about">About</Link> | 
                <Link to="/contact">Contact</Link> | 
                <Link to="/registration">Registration</Link> | 
                <Link to="/login">Login</Link> | 
            </nav>

        </React.Fragment>
    );
}

export default Header;