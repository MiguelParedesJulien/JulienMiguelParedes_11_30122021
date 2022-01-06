import React, { Component } from "react";
//import { Link } from "react-router-dom";
import Error404 from "../../components/error404/Error404";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";

class Error extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="mainWrapper">
          <Header />
          <Error404 />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Error;