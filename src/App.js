import React, { Component } from 'react';
import './App.css';
import Login from './Components/Login/Login';

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
