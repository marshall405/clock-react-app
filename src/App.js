import React, { Component } from 'react';
import { Time } from './components/Time';
import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Time time={true}/>
      </div>
    );
  }
}

export default App;
