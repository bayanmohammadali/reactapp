import React,{Component} from "react";
import Header from "./header";
import Footer from "./footer";  
import Main from "./Main";
class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <Main NamePage="Home Page"  designer="Bayan"/>
     <Footer />
    </>
    );
  }
}
export default Home;
