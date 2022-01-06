import { Component } from "react";
import "./banner.css";

class Banner extends Component {
  render() {
    return <div className="banner">{this.props.titre}</div>;
  }
}

export default Banner;