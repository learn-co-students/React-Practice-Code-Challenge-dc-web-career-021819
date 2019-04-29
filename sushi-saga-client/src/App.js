import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()
    this.state = {
      remaining: 100,
      eatenSushi: [],
      allSushies: null,
      displayNumber: 0
    }
  }

  componentDidMount() {
    fetch(API)
      .then(r => r.json())
      .then(d => this.setState({allSushies: d}))
  }

  updateDisplayNumber = () => {
    this.state.displayNumber < 96 ? this.setState({displayNumber: this.state.displayNumber + 4}) : null
  }

  fourSushies = () => {
    let i = this.state.displayNumber
    let sushies = this.state.allSushies
    return [sushies[0+i], sushies[1+i], sushies[2+i], sushies[3+i]]
  }

  addIdToEatenSushi = (event, p) => {
    if (this.checkEatenSushi(event)){
      return null
    }
    if (this.state.remaining < p.item.price){
      return null
    }
    (
      this.setState({eatenSushi: [...this.state.eatenSushi, event.currentTarget.dataset.sushiId]}),
      this.changeRemaining(p.item.price),
      event.target.src = ""
    )
  }

  checkEatenSushi = (event) => {
    return this.state.eatenSushi.includes(event.currentTarget.dataset.sushiId)
  }

  changeRemaining = (i) => {
    this.setState({remaining: this.state.remaining - i})
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          allSushies={this.state.allSushies}
          updateDisplayNumber={this.updateDisplayNumber}
          fourSushies={()=> this.state.allSushies !== null ? this.fourSushies() : null}
          addIdToEatenSushi={this.addIdToEatenSushi}
          checkEatenSushi={this.checkEatenSushi}
        />
        <Table
          remaining={this.state.remaining}
          eatenSushi={this.state.eatenSushi}
        />
      </div>
    );
  }
}

export default App;
