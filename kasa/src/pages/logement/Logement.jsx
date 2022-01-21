import React, { Component } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider";
import InfoLoc from "../../components/infoLoc/InfoLoc";
import Error404 from "../../components/error404/Error404";

class Logement extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: undefined,
      isLoading: false,
    };
  }

  componentDidMount() {
    document.body.scrollIntoView();
    this.setState({ isLoading: true });
    fetch("/data.json")
      .then((response) => response.json())
      .then((jsonResponse) => {
        setTimeout(() => {
          this.setState ({
            data: jsonResponse.find(
              (logement) => logement.id === this.props.match.params.id
            ),
            isLoading: false,
          })
        }, 3000)
      }).catch((error) => console.log(error));
  }

  render() {
    // console.log(this.props.match.params.id)
    // console.log(this.state.data);
    const page = this.state.isLoading ? (
      <div>
        {/* <Loader /> */}
        Loading...
      </div>
    ) : (
      this.state.data ? (
        <div>
          <Slider data={this.state.data} />
          <InfoLoc data={this.state.data} />
        </div>
      ) : (
        <div>
          <Error404 />
        </div>
      )
    );

    return (
      <React.Fragment>
        <div className="mainWrapper">
          <Header />
          {page}
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default Logement;