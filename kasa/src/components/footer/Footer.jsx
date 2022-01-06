import { Component } from "react";
import logo from "../../assets/img/logoFooter.svg";
import "./footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <footer>
          <h2>
            <img className="imgFooter" src={logo} alt="logo Kasa" />
          </h2>
          <p className="pFooter">© 2020 Kasa. All rights reserved</p>
        </footer>
      </div>
    );
  }
}

export default Footer;