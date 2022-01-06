import { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    return (
      <li className="cardLi">
        <Link to={`/logement/${this.props.location.id}`}>
          <article className="locationCard">
            <img
              className="imgCard"
              src={this.props.location.cover}
              alt={this.props.location.title}
            />
            <h3>{this.props.location.title}</h3>
          </article>
        </Link>
      </li>
    );
  }
}

export default Card;