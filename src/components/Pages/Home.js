import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskHandler } from '../../store/actions';
import Svg from '../Svg';

class Home extends Component {
  componentDidMount () {
    this.props.getTasks();
  }
  
  render () {
    let tasks = <span className='home__warning'>Please start adding tasks!!</span>
    if (this.props.tasks.length > 0) {
      tasks = this.props.tasks.map((task) => {
        return (
          <li className='home__task' key={task}>
            <span className='task__name'>{task}</span>
            <div className='home__svg-container'>
              <Svg onClick={() => this.props.completeTask(task)} name='check' className='home__svg home__svg--check' />
              <Svg onClick={() => this.props.deleteTask(task)} name='cross' className='home__svg home__svg--cross' />
            </div>
          </li>
        )
      })
    }

    let taskProgress = <span className='home__warning'>Please start adding tasks!!</span>;
    if (this.props.taskProgress.length > 0) {
      taskProgress = this.props.taskProgress.map((taskPrgs, i) => {
        return (
          <li key={i} className='home__task'>
            <span className='task__name'>{taskPrgs}</span>
          </li>
        )
      })
    }
    
    return (
      <div className='home'>
        <div className='home__tasks'>
          <div className='home__header'>
            <span className='home__heading'>Your tasks</span>
          </div>
          <ol className='home__tasks-container'>
            {tasks}
          </ol>
        </div>
        <div className='home__tasks'>
          <div className='home__header'>
            <span className='home__heading'>Task Progress</span>
          </div>
          <ol className='home__tasks-container'>
            {taskProgress}
          </ol>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  taskProgress: state.taskProgress
})

const mapDispatchToProps = (dispatch) => ({
  getTasks: () => taskHandler(dispatch, null, 'tasks'),
  completeTask: (task) => taskHandler(dispatch, task, 'taskCompleted'),
  deleteTask: (task) => taskHandler(dispatch, task, 'deleteTask')
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
