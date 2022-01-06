import { Component } from "react";
import Dropdown from "../dropdown/Dropdown";
import Host from "../host/Host";
import Stars from "../stars/Stars";
import "./infoLoc.css";

class InfoLoc extends Component {
  render() {
    console.log(this.props.data.host);
    return (
      <>
        <div className="infoContainer">
          <div className="elemLeft">
            <h2 className="titreLoc">{this.props.data.title}</h2>
            <p className="lieux">{this.props.data.location}</p>
            <div className="tags">
              <ul>
                {this.props.data.tags.map((tag, index) => (
                  <li key={index} className="listeTags">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="elemRight">
            <div>
              <Stars vote={this.props.data.rating} />
            </div>
            <div></div>
            <div className="proprio">
              <Host proprio={this.props.data.host} />
            </div>
          </div>
        </div>
        <div className="drop">
          <Dropdown
            title="Description"
            describe={this.props.data.description}
          />
          <Dropdown title="Équipements" liste={this.props.data.equipments} />
        </div>
      </>
    );
  }
}

export default InfoLoc;