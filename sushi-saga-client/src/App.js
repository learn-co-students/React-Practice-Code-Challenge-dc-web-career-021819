import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor(){
    super();

    this.state = {
      sushiList: [],
      sushiListIndex: 0,
      money: 100,
      eatenSushisIds: []
    }
  }

  componentDidMount() {
    fetch(API)
      .then(res => res.json())
      .then(data => this.setState({sushiList: data}))
  }

  moreSushiEventHandler = (event) => {
    if((this.state.sushiListIndex + 4) < this.state.sushiList.length){
      this.setState({
        sushiListIndex: this.state.sushiListIndex + 4
      })
    }
    else{
      this.setState({
        sushiListIndex: 0
      })
    }
  }

  sushiClickHandler = (event) => {
    let newArray = [...this.state.eatenSushisIds]
    newArray.push(parseInt(event.currentTarget.dataset.id))

    let newMoney = this.state.money - parseInt(event.currentTarget.dataset.price);
    if(newMoney >= 0){
      this.setState({
        eatenSushisIds: newArray,
        money: newMoney
      });
    }
  }

  render() {

    return (
      <div className="app">
        { (this.state.sushiListIndex + 4) <= this.state.sushiList.length ?
          <SushiContainer moreSushiEventHandler={this.moreSushiEventHandler} sushiClickHandler={this.sushiClickHandler} eatenSushis={this.state.eatenSushisIds} sushiArray={this.state.sushiList.slice(this.state.sushiListIndex, this.state.sushiListIndex + 4)}/>
          : null
         }

        <Table money={this.state.money} plates={this.state.eatenSushisIds}/>
      </div>
    );
  }
}

export default App;
