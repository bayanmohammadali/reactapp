import React,{Component} from "react";
import Header from "./header";
import Footer from "./footer";  
class Home extends Component {
  render() {
    return (
      <>
      <Header />
      <main>
        Home page
      </main>
     <Footer />
    </>
    );
  }
}
export default Home;
