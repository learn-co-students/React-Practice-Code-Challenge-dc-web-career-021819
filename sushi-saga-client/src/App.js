import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const URL = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super()
    this.state = {
      allSushis: [],
      sushisOnPlates: [],
      eatenSushis: [],
      balance: 100
    }
  }

  getAllSushis(){
    fetch(URL).then(response => response.json())
    .then(sushis => {
      this.setState({allSushis: sushis, sushisOnPlates: sushis.slice(0,4)})
    }
    )
  }

  getMoreSushis = () =>{
    let lastIndex = this.state.sushisOnPlates[3].id
    this.setState({
      sushisOnPlates: this.state.allSushis.slice(lastIndex,lastIndex+4)
    })
  }

  eatSushi = (sushi) => {
    let newBalance = this.state.balance - sushi.price
    if (newBalance >= 0 && !this.state.eatenSushis.includes(sushi.id)) {
      this.setState({
        eatenSushis: [...this.state.eatenSushis, sushi.id],
        balance: newBalance
      })
    }
  }

  componentDidMount(){
    this.getAllSushis()
  }

  render() {
    return (
      <div className="app">
        <SushiContainer sushisOnPlates={this.state.sushisOnPlates}
        eatenSushis={this.state.eatenSushis} onGetMoreSushis={this.getMoreSushis} onEatSushi={this.eatSushi} />
        <Table balance={this.state.balance} eatenSushis={this.state.eatenSushis}/>
      </div>
    );
  }
}

export default App;
