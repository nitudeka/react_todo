import React, { Component } from 'react';
import Navbar from '../components/Navigation/Navbar';
import Register from '../components/Form/Register/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Register />
      </div>
    );
  }
}

export default App;
