import React, { Component } from 'react';
import Navbar from '../components/Navigation/Navbar';
import { Route } from 'react-router-dom';
import Register from '../components/Form/Register/Register';
import Login from '../components/Form/Signin/Signin';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path='/signin' render={() => <Login />} />
        <Route path='/register' render={() => <Register />} />
      </div>
    );
  }
}

export default App;
