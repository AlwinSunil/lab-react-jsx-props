import { Component } from "react";
import "./App.css";

export default class AppClass extends Component {
  render() {
    const imageData = this.props.data;

    return (
      <div>
        <h2>Kalvim Gallery (Class)</h2>
        <div className="grid">
          {imageData.map((element, index) => (
            <img src={element.img} alt="" key={index} />
          ))}
        </div>
      </div>
    );
  }
}
