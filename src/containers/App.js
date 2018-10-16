import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleModal, getInputChange, taskHandler } from '../store/actions';
import Routes from '../components/Routes/Routes';
import Spinner from '../components/UI/Spinner/Spinner';
import Navbar from '../components/Navigation/Navbar';
import Modal from '../components/UI/Modal/Modal';

class App extends Component {
  addTaskHandler = () => {
    if (this.props.inputValue.length > 0) {
      this.props.addNewTask(this.props.inputValue);
    }
  }

  componentDidMount () {
    if (window.localStorage.getItem('token')) {
      this.props.getTasks();
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar changeModalState={this.props.toggleModalState} />
        <Spinner visible={this.props.isPending} />
        <Modal onClick={this.props.toggleModalState} modalIsVisible={this.props.modalShown}>
          <div className='inputs'>
	          <input onChange={this.props.getInputChange} className='input__input' type='text' placeholder='Enter your new task here!' />
	          <button onClick={this.addTaskHandler} className='input__button'>Add</button>
	        </div>
        </Modal>
        <Routes />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isPending: state.isPending,
  inputValue: state.inputValue,
  modalShown: state.modalShown
});

const mapDispatchToProps = (dispatch) => ({
  getInputChange: (event) => dispatch(getInputChange(event.target.value)),
  getTasks: () => taskHandler(dispatch, null, 'tasks'),
  toggleModalState: () => dispatch(toggleModal()),
  addNewTask: (task) => taskHandler(dispatch, task, 'newTask')
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
