import { Component } from "react/cjs/react.production.min";

class Host extends Component {
  constructor(props) {
    super(props);
    this.sate = {};
  }
  render() {
    return (
      <>
        <div className="nom">
          <h3>{this.props.proprio.name.split(" ")[0]}</h3>
          <h3>{this.props.proprio.name.split(" ")[1]}</h3>
        </div>
        <img src={this.props.proprio.picture} alt="propriétaire" />
      </>
    );
  }
}

export default Host;