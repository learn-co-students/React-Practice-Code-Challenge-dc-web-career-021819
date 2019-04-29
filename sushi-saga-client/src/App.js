import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  state = {
    allSushis: [],
    currentSushi: [],
    sushiIndex: 0,
    balance: 100,
    eaten: []
  };

  componentDidMount() {
    fetch(API)
      .then(resp => resp.json())
      .then(sushis => {
        this.setState({
          allSushis: sushis,
          currentSushi: sushis.slice(0, 4)
        });
      });
  }

  getMoreSushis = () => {
    const currentIndex = this.state.sushiIndex;
    this.setState({
      currentSushi: this.state.allSushis.slice(currentIndex, currentIndex + 4),
      sushiIndex: this.state.sushiIndex + 4
    });
  };

  render() {
    return (
      <div className="app">
        <SushiContainer
          currentSushi={this.state.currentSushi}
          getMoreSushis={this.getMoreSushis}
        />
        <Table />
      </div>
    );
  }
}

export default App;
