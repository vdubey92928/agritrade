import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
function About(){
    return(
      <React.Fragment>
        <Header />
        <h1>About page</h1>
        <p>This is About page</p>
        <Footer/>
      </React.Fragment>

    );
}

export default About;