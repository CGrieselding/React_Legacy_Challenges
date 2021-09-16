import React from "react";

export default class DogIndex extends React.Component {
  constructor() {
    super();
    this.state = {
      dogImage: "",
    };
  }

  componentDidMount() {
    fetch("https://dog.ceo/api/breeds/image/random").then((res) => {
      // console.log('response', res);
      if (!res.ok) {
        throw Error("Oh no! Where did the good boy go?");
      }
      return res
        .json()
        .then((json) => {
          console.log(json);
          this.setState({ dogImage: json.message });
        })
        .catch((err) => {
          throw Error(err.message);
        });
    });
  }

  componentDidUpdate() {
    console.log(this.state.dogImage);
  }

  render() {
    return (
      <>
        <img src={this.state.dogImage} alt="Doggo" />
        <br />
        <button onClick={(e) => this.componentDidMount(e)}>Next Doggo</button>
      </>
    );
  }
}
