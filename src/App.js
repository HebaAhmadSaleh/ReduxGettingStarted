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

  componentWillMount() {
    console.log('cwm');
  }

  componentDidMount() {
       console.log('cdm');
  }

  componentWillUnmount() {
    console.log('cwum');
  }

  componentWillUpdate() {
    console.log('c w update');
  }

  componentWillReceiveProps(nextProps) {
    console.log('recieve',nextProps);
  }

  componentDidUpdate(prevProps, prevState) {
        console.log('c did update');

  }
  render() {
console.log('rener');
    let inc = () => {
      this.store.dispatch({ type: 'INCREMENT' });
      this.setState({ current: this.store.getState() })
    }
    let dec = () => {
      this.store.dispatch({ type: 'DECREMENT' });
      this.setState({ current: this.store.getState() })
    }

      let addTodo = () => {
      this.store.dispatch({ type: 'ADD-TODO',added:{text:this.input.value,id:Math.random()} });
      this.setState({ current: this.store.getState() });
      this.input.value = '';

		}
		let removeTodo = (id) => {
			console.log(id);
			this.store.dispatch({ type: 'REMOVE-TODO',removedId:id});
			this.setState({ current: this.store.getState() });
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
        {/* <p style={{ fontSize: 40, color: 'pink' }}>{this.store.getState()}</p> */}
        <button onClick={() => inc()}>
          INCREMENT
        </button>

        <button onClick={() => dec()}>
          DECREMENT
        </button>

        <input ref={ node=> this.input = node} />
        <button onClick={() => addTodo()}>
                Add Todo
        </button>
				{this.store.getState().map(item=><div key={item.id}><span >{item.text}  </span>
				<button style={style} onClick={()=> removeTodo(item.id)}>x</button></div>)}
      </div>
    );
  }
}

const style = {
	width: 80,
	background: 'none',
	cursor: 'pointer',
	fontWeight:'bold',
	fontFamily: 'voltaeftu-regular',
	fontSize: 16,
	color: "red",
	border: 0,
}

export default App;
