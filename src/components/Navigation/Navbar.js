import React from 'react';
import Navlink from './Navlink';

const Navbar = (props) => {
	return (
	  <nav className='nav'>
			<span className='nav__heading'>TODO</span>
			<ul className='nav__list'>
				<Navlink route='/signin' link='Signout' />
				<li className='nav__item'>New Task</li>
			</ul>
		</nav>
	)
}

export default Navbar;
