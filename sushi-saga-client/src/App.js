import React, { Component } from "react";
import SushiContainer from "./containers/SushiContainer";
import Table from "./containers/Table";

// Endpoint!
const API = "http://localhost:3000/sushis";

class App extends Component {
  constructor() {
    super();
    this.state = {
      funds: 200,
      plates: [],
      allSushi: [],
      sushiIndex: 0,
    };
  }
  componentDidMount = async () => {
    const res = await fetch(API);
    const sushi = await res.json();
    this.setState({
      allSushi: sushi.map(s => {
        return { ...s, eaten: false };
      }),
    });
  };
  requestSushi = () => {
    console.log("more sushi", this.state.sushiIndex);
    let newIndex = this.state.sushiIndex + 4;
    if (newIndex >= this.state.allSushi.length) {
      newIndex = 0;
    }
    this.setState({ sushiIndex: newIndex });
  };
  handleClick = sushi => {
    if (this.state.funds >= sushi.price) {
      console.log("click", sushi);
      const newSushi = [...this.state.allSushi];
      const sush = newSushi.find(s => s.id === sushi.id);
      sush.eaten = true;

      this.setState({ allSushi: newSushi, funds: this.state.funds - sushi.price, plates: [...this.state.plates, 1] });
    } else {
      alert("Not enough Funds!");
    }
  };
  render() {
    return (
      <div className="app">
        <SushiContainer requestSushi={this.requestSushi} sushis={this.state.allSushi.slice(this.state.sushiIndex, this.state.sushiIndex + 4)} handleClick={this.handleClick} />
        <Table funds={this.state.funds} plates={this.state.plates} />
      </div>
    );
  }
}

export default App;
