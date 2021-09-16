import React, { Component } from "react";
import { Input } from "reactstrap";

export default class SearchIndex extends Component {
  constructor() {
    super();
    this.state = {
      things: [
        "pen",
        "marker",
        "eraser",
        "notebook",
        "pencil",
        "scissors",
        "highlighter",
        "stapler",
        "paper clip",
        "binder",
        "hole punch",
        "laminator",
        "laminating sheets",
        "protective sheets",
        "index cards",
      ],
      searchTerm: "",
    };
    this.searchTerm = this.searchFunction.bind(this)
  }

  searchFunction(e) {

    this.setState({
      // things: [],
      searchTerm: e.target.value
    });
  };

  render() {

    let filteredThings = this.state.things

    return (
      <div>
        <Input
          placeholder="Search Here"
          type="text"
          onChange={
            (e) => {this.searchTerm(e);}
          }
        />
        <h1>Results:</h1>
        {filteredThings.filter(thing => {
          return thing.indexOf(this.state.searchTerm) > -1;
        }).map((thing, index) => {
          return <h4 key={index}>{thing}</h4>
        })
      }
        
        {/* filteredThings.filter(searchingFor(this.state.search).map((current, index) => {
          return <h4 key={index}>{current}</h4>
        }))
      } */}
          {/* => {
            if (this.state.search === "") {
              return items;
            } else if (items.includes(this.state.search)) {
              return items;
            }
          })
          .map((current, index) => {
            return <h4 key={index}>{current}</h4>;
          })}] */}
      </div>
    );
  }
}