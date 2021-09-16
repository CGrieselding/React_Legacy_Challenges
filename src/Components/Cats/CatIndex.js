import React, { Component } from "react";
import CatList from "./CatList";

export default class CatIndex extends Component {

  constructor() {
    super();
    this.state = {
      breeds: [
        "persian",
        "siamese",
        "maine coon",
        "ragdoll",
        "scottish fold",
        "sphynx",
        "british shorthair",
        "bengal",
        "american shorthair",
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>Cat Breeds:</h1>
        <CatList cats={this.state.breeds}/>
      </div>
    );
  }
}
