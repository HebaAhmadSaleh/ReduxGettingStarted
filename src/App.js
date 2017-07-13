import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { EventEmitter } from 'events';
import { counter } from './reducer.js'
import { createStore } from './store.js'

class App extends Component {
  store = createStore(counter);
  state = {
    current: this.store.getState()
  }


  render() {

    let inc = () => {
      this.store.dispatch({ type: 'INCREMENT' });
      this.setState({ current: this.store.getState() })
    }
    let dec = () => {
      this.store.dispatch({ type: 'DECREMENT' });
      this.setState({ current: this.store.getState() })
    }

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{ fontSize: 40, color: 'pink' }}>{this.store.getState()}</p>
        <button onClick={() => inc()}>
          INCREMENT
        </button>

        <button onClick={() => dec()}>
          DECREMENT
        </button>

      </div>
    );
  }
}

export default App;
