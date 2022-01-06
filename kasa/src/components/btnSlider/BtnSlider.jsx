import { Component } from "react";
import flecheSlide from "../../assets/img/flecheSlide.svg";

class BtnSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <button onClick={this.props.moveSlide}>
        <img
          src={flecheSlide}
          alt="fleche caroussel"
          className={
            this.props.direction === "next" ? "arrowRight" : "arrowLeft"
          }
        />
      </button>
    );
  }
}

export default BtnSlider;