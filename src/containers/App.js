import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import Register from '../components/Form/Register/Register';
import Navbar from '../components/Navigation/Navbar';
import Login from '../components/Form/Signin/Signin';
import Home from '../components/Pages/Home';
import Modal from '../components/UI/Modal/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar changeModalState={this.props.toggleModalState} />
        <Modal onClick={this.props.toggleModalState} modalIsVisible={!this.props.modalShown}>
          <div className='inputs'>
	          <input onChange={this.props.inputChangeHandler} className='input__input' type='text' placeholder='Enter your new task here!' />
	          <button onClick={this.addTaskHandler} className='input__button'>Add</button>
	        </div>
        </Modal>
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
  email: state.email,
  modalShown: state.modalShown
});

const mapDispatchToProps = (dispatch) => ({
  toggleModalState: () => dispatch({ type: 'TOGGLE_MODAL' })
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
