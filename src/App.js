import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { SkillItem } from "./Components/index";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SkillItem/>
      </div>
    );
  }
}

export default App;
