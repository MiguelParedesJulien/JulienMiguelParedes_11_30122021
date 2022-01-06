import { Component } from "react";
import flecheBas from "../../assets/img/flecheBas.svg";
import "./dropdown.css";

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
    this.openDrop = this.openDrop.bind(this);
    this.closeDrop = this.closeDrop.bind(this);
  }

  contentFabrique() {
    if (this.props.describe) {
      return <p className="contentDropdown">{this.props.describe}</p>;
    }
    if (this.props.liste) {
      return (
        <div className="contentDropdown">
          <ul>
            {this.props.liste.map((element) => (
              <li key={element}>{element}</li>
            ))}
          </ul>
        </div>
      );
    }
  }

  openDrop() {
    this.setState({ isOpen: true });
  }

  closeDrop() {
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <div className="dropdown">
        <div className="dropdownHeader">
          <div className="dropdownTitles">{this.props.title}</div>
          <img
            src={flecheBas}
            alt="fleche"
            className={this.state.isOpen ? "flecheUp" : "flecheDown"}
            onClick={this.state.isOpen ? this.closeDrop : this.openDrop}
          />
        </div>
        <div>{this.state.isOpen && this.contentFabrique()}</div>
      </div>
    );
  }
}

export default Dropdown;