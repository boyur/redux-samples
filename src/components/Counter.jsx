import React, { Component } from 'react'
import store from '../store'
import {increment} from '../AC'

class Counter extends Component {

  state = {
    count: store.getState()
  };

  componentDidMount() {
    this.unsubstribe = store.subscribe(this.handleStoreChenge)
  }

  componentWillUnmount() {
    this.unsubstribe();
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <a href="#" onClick={this.handleIncrement}>Increment</a>
      </div>
    )
  }

  handleIncrement = ev => {
    ev.preventDefault();
    const action = increment();
    store.dispatch(action);
  };

  handleStoreChenge = () => {
    this.setState({
      count: store.getState()
    })
  }
}

export default Counter;