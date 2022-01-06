import { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../img/logo.png";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <header>
        <h1>
          <NavLink exact to="/">
            <img className="imgHeader" src={logo} alt="logo kasa" />
          </NavLink>
        </h1>
        <nav>
          <ul>
            <li>
              <NavLink exact to="/">
                Accueil
              </NavLink>
            </li>
            <li>
              <NavLink exact to="/a-propos">
                A propos
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;