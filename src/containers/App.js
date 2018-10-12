import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { Route, Redirect } from 'react-router-dom';
import { getInputChange, newTask } from '../store/actions';
import Register from '../components/Form/Register/Register';
import Navbar from '../components/Navigation/Navbar';
import Login from '../components/Form/Signin/Signin';
import Home from '../components/Pages/Home';
import Modal from '../components/UI/Modal/Modal';

class App extends Component {
  addTaskHandler = () => {
    if (this.props.inputValue.length > 0) {
      this.props.addNewTask(this.props.email, this.props.inputValue);
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar changeModalState={this.props.toggleModalState} />
        <Modal onClick={this.props.toggleModalState} modalIsVisible={!this.props.modalShown}>
          <div className='inputs'>
	          <input onChange={this.props.getInputChange} className='input__input' type='text' placeholder='Enter your new task here!' />
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
  inputValue: state.inputValue,
  email: state.email,
  modalShown: state.modalShown
});

const mapDispatchToProps = (dispatch) => ({
  getInputChange: (event) => dispatch(getInputChange(event.target.value)),
  toggleModalState: () => dispatch({ type: 'TOGGLE_MODAL' }),
  addNewTask: (email, task) => newTask(dispatch, email, task)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
