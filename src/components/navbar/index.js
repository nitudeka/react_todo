import React from 'react';

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
      <div className='nav__user'>Login</div>
    </div>
  )
};

export default navbar;
