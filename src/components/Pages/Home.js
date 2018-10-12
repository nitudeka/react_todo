import React from 'react';
import { connect } from 'react-redux';
import { completedTask } from '../../store/actions';
import Svg from '../Svg';

const Home = (props) => {
  let tasks = <span className='home__warning'>Please start adding tasks!!</span>
  if (props.tasks.length > 0) {
    tasks = props.tasks.map((task) => {
      return (
        <li className='home__task' key={task}>
          <span className='task__name'>{task}</span>
          <div className='home__svg-container'>
            <Svg onClick={() => props.completeTask(props.email, task)} name='check' className='home__svg home__svg--check' />
            <Svg name='cross' className='home__svg home__svg--cross' />
          </div>
        </li>
      )
    })
  }

  let taskProgress = <span className='home__warning'>Please start adding tasks!!</span>;
  if (props.taskProgress.length > 0) {
    taskProgress = props.taskProgress.map((taskPrgs, i) => {
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
        <ul className='home__tasks-container'>
          {tasks}
        </ul>
      </div>
      <div className='home__tasks'>
        <div className='home__header'>
          <span className='home__heading'>Task Progress</span>
        </div>
        <ul className='home__tasks-container'>
          {taskProgress}
        </ul>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  email: state.email,
  tasks: state.tasks,
  taskProgress: state.taskProgress
})

const mapDispatchToProps = (dispatch) => ({
  completeTask: (email, task) => completedTask(dispatch, email, task)
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
