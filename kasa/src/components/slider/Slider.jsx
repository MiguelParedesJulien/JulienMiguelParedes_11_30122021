import { Component } from "react";
import BtnSlider from "../btnSlider/BtnSlider";
import "./slider.css";

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      indexSlide: 0,
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.prevSlide = this.prevSlide.bind(this);
  }

  nextSlide() {
    if (this.state.indexSlide !== this.props.data.pictures.length - 1) {
      this.setState({ indexSlide: this.state.indexSlide + 1 });
    } else if (this.state.indexSlide === this.props.data.pictures.length - 1) {
      this.setState({ indexSlide: 0 });
    }
  }

  prevSlide() {
    if (this.state.indexSlide !== 0) {
      this.setState({ indexSlide: this.state.indexSlide - 1 });
    } else if (this.state.indexSlide === 0) {
      this.setState({ indexSlide: this.props.data.pictures.length - 1 });
    }
  }

  render() {
    console.log(this.props.data.pictures);
    if (this.props.data.pictures.length > 1) {
      return (
        <div className="container-slider">
          {this.props.data.pictures.map((photo, index) => (
            <div
              key={index}
              className={
                this.state.indexSlide === index ? "slide active-anim" : "slide"
              }
            >
              <img src={photo} alt="vue d'une pièce de l'appartement" />
            </div>
          ))}
          <div className="compteur-img">
            {this.state.indexSlide + 1}/{this.props.data.pictures.length}
          </div>
          <BtnSlider moveSlide={this.nextSlide} direction={"next"} />
          <BtnSlider moveSlide={this.prevSlide} direction={"prev"} />
        </div>
      );
    } else {
      return (
        <div className="container-slider">
          {this.props.data.pictures.map((photo, index) => (
            <div
              key={index}
              className={
                this.state.indexSlide === index ? "slide active-anim" : "slide"
              }
            >
              <img src={photo} alt="vue d'une pièce de l'appartement" />
            </div>
          ))}
        </div>
      );
    }
  }
}

export default Slider;