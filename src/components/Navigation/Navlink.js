import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = (props) => {
	const onClick = () => {
    fetch('http://localhost:3000/signout', {
      mathod: 'get',
      headers: {
        authorization: window.localStorage.getItem('token')
      }
    })
    window.localStorage.clear();
	}

  return (
    <Link style={{textDecoration: 'none'}} to={props.route}>
      <li onClick={onClick} className='nav__item'>{props.link}</li>
    </Link>
  )
}

export default Navlink;
