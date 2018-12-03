import React, { Component } from 'react';
import './App.css';
import MainNav from './MainNav';
import Foot from './Foot';

class App extends Component {
  render() {
    return (
      <div>
        <MainNav/>
        <Foot />
      </div>
    );
  }
}

export default App;
