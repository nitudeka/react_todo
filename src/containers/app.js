/*
 * main starting point of my app
 *
 */

import React, { Component } from 'react';
import Navbar from '../components/navbar';
import Home from '../pages/home';
import Notification from '../components/notification';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Notification />
        <Home />
      </div>
    )
  }
}

export default App;
