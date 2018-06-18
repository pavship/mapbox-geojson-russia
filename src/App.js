import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import YouDoTitle from './components/YouDoTitle'
import Map from './components/Map'

import ContainerDimensions from 'react-container-dimensions'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <YouDoTitle />
        </header>
        <ContainerDimensions>
          <Map />
        </ContainerDimensions>
      </div>
    );
  }
}

export default App;
