/*
 * main starting point of my app
 *
 */

import React, { Component } from 'react';
// import Navbar from '../components/navbar';
// import Home from '../pages/home';
import Calendar from '../components/calendar';

class App extends Component {
  render() {
    return (
      <div>
      	<Calendar />
      </div>
    )
  }
}

export default App;
