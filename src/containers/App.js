import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import Register from '../components/Form/Register/Register';
import Navbar from '../components/Navigation/Navbar';
import Login from '../components/Form/Signin/Signin';
import Home from '../components/Pages/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Route path='/signin' render={() => <Login />} />
        <Route path='/register' render={() => <Register />} />
        <Route exact path='/' render={() => {
          if (this.props.email.length > 0) {
            return <Home />
          } else {
            return <Redirect to='/signin' />
          }
        }} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.email
});

const mapDispatchToProps = (dispatch) => ({})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
