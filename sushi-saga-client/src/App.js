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
      this.setState({allSushis: sushis, sushisOnPlates: this.initializeSushis(sushis)})
    }
    )
  }

  initializeSushis = (sushis) => {
    let sushiSample = this.sample(sushis, 4)
    sushiSample.forEach(sushi => sushi.eaten = false)
    return sushiSample
  }

  randomSampleOfSushi = () =>{
    let sushiSample = this.sample(this.state.allSushis, 4)
    sushiSample.forEach(sushi => sushi.eaten = false)
    return sushiSample
  }

  sample = (array, num) =>{
    let sampleArray = []
    for (let i = 0; i < num; i++){
      let selection = array[Math.floor(array.length * Math.random())]
      sampleArray.push(selection)
    }
    return sampleArray
  }

  getMoreSushis = () =>{
    this.setState({
      sushisOnPlates: this.randomSampleOfSushi()
    })
  }

  eatSushi = (sushi) => {
    this.setState({
      eatenSushis: [...this.state.eatenSushis, sushi.id],
      balance: this.state.balance - sushi.price
    })
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
