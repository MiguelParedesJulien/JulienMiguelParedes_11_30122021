import { Component } from "react";
import { Link } from "react-router-dom";
import "./error404.css";

class Error404 extends Component {
  render() {
    return (
      <main>
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/">Retourner sur la page d'accueil</Link>
      </main>
    );
  }
}

export default Error404;