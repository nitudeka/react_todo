import React from 'react';
import { withRouter } from 'react-router';
import Navlink from './Navlink';

const Navbar = (props) => {
	let navlink = <Navlink route='/react_todo/signin' link='Signout' />
	let newTask = <li onClick={props.changeModalState} className='nav__item'>New Task</li>;
	if (props.location.pathname === '/signin') {
		newTask = null;
		navlink = <Navlink route='/react_todo/register' link='Register' />
	} else if (props.location.pathname === '/register') {
		newTask = null;
		navlink = <Navlink route='/react_todo/signin' link='Signin' />
	}
	
	return (
	  <nav className='nav'>
			<span className='nav__heading'>TODO</span>
			<ul className='nav__list'>
				{ navlink }
				{ newTask }
			</ul>
		</nav>
	)
}

export default withRouter(Navbar);
