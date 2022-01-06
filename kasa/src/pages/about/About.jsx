import React, { Component } from "react";
import Banner from "../../components/banner/Banner";
import Dropdown from "../../components/dropdown/Dropdown";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import flecheBas from "../../assets/img/flecheBas.svg";

class About extends Component {
  constructor(props) {
    super(props);
    this.fiability = (
      <div className="dropdown">
        <h2>Fiabilité</h2>
        <img src={flecheBas} alt="ouvre le dropdown" />
      </div>
    );
  }
  render() {
    const aboutInfo = {
      Fiablilité:
        "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.",
      Respect:
        "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
      Service:
        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
      Sécurité:
        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
    };

    const keyObjet = Object.keys(aboutInfo);

    return (
      <React.Fragment>
        <div className="mainWrapper">
          <Header />
          <div className="about">
            <Banner />
          </div>
          <Dropdown title={keyObjet[0]} describe={aboutInfo.Fiablilité} />
          <Dropdown title={keyObjet[1]} describe={aboutInfo.Respect} />
          <Dropdown title={keyObjet[2]} describe={aboutInfo.Sécurité} />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default About;