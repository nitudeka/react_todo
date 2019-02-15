import React from 'react';
import { connect } from 'react-redux';
import { toggleForm } from '../../store/actions';

const navbar = (props) => {
  return (
    <div className='nav'>
      <div className='nav__container'>
        <a className='nav__logo' href='/'>Logo</a>
        <ul className='nav__list'>
          <li className='nav__item'><a className='nav__link' href='/'>Home</a></li>
          <li className='nav__item'><a className='nav__link' href='/'>Try it!</a></li>
        </ul>
      </div>
      <div onClick={props.toggleForm} className='nav__user'>Login</div>
    </div>
  )
};

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = (dispatch) => ({
  toggleForm: () => { dispatch(toggleForm()) }
});

export default connect(mapStateToProps, mapDispatchToProps)(navbar);
