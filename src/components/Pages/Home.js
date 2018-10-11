import React from 'react';
import Svg from '../Svg';

const Home = (props) => {
  return (
    <div className='home'>
      <div className='home__tasks'>
        <div className='home__header'>
          <span className='home__heading'>Your tasks</span>
        </div>
        <ul className='home__tasks-container'>
          <li className='home__task'>
            <span className='task__name'>Go to home</span>
            <div className='home__svg-container'>
              <Svg name='check' className='home__svg home__svg--check' />
              <Svg name='cross' className='home__svg home__svg--cross' />
            </div>
          </li>
          <li className='home__task'>
            <span className='task__name'>Go to home</span>
            <div className='home__svg-container'>
              <Svg name='check' className='home__svg home__svg--check' />
              <Svg name='cross' className='home__svg home__svg--cross' />
            </div>
          </li>
        </ul>
      </div>
      <div className='home__tasks'>
        <div className='home__header'>
          <span className='home__heading'>Task Progress</span>
        </div>
        <ul className='home__tasks-container'>
          <li className='home__task'>
            <span className='task__name'>Go to home</span>
          </li>
          <li className='home__task'>
            <span className='task__name'>Go to home</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home;
