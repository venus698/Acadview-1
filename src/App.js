import React, { Component } from 'react';
import './App.css';
import Display from './Display'

class App extends Component {
  render() {
    return (
      <div className = "App">
        <h1>My react app!</h1>
        <h3>This is my first react app</h3>
        <Display name ="Venus" age = "20" month = "November" />
        <Display name ="Ayush" age = "16" month = "April" />

      </div>
    );
  }
}

export default App;