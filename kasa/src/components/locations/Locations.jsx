import { Component } from "react";
import Card from "../card/Card";
import "./locations.css";

class Location extends Component {
  render() {
    return (
      <section className="cardSection">
        <ul className="cardUl">
          {this.props.data.map((location) => (
            <Card location={location} key={location.id} />
          ))}
        </ul>
      </section>
    );
  }
}

export default Location;