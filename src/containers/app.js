import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Home from '../pages/home';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    )
  }
}

export default App;
