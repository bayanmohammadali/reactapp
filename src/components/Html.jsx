import React, { Component } from "react";
import Header from "./header";
import Footer from "./footer";  
import Main from "./Main";


class Html extends Component {
  render() {
    return (
      <>
      <Header />
      <Main NamePage="Html Page" designer="Ali"/>
      <Footer />
    </>
    );
  }
}

export default Html;
