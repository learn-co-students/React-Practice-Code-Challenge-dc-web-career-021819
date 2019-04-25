import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sushis: [],
      eatenSushi: [],
      money: 100
    };
  }

  componentDidMount() {
    fetch(API)
    .then(response => response.json())
    .then(sushiList => {
      this.setState({
        sushis: sushiList
      })
    })
  }

  moreSushi = () => {
    this.setState({
      sushis: this.state.sushis.slice(4)
    })
  }

  eatSushi = (sushi) => {
    if (!this.state.eatenSushi.includes(sushi) && (this.state.money - sushi.price) > 0) {
      this.setState({
        eatenSushi: [...this.state.eatenSushi, sushi],
        money: this.state.money - sushi.price
      })
    }
  }

  render() {
    return (
      <div className="app">
        <SushiContainer  sushiList={this.state.sushis} moreSushi={this.moreSushi} eatenSushi={this.state.eatenSushi} eatSushi={this.eatSushi}/>
        <Table eatenSushi={this.state.eatenSushi} money={this.state.money}/>
      </div>
    );
  }
}

export default App;
