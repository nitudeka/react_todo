import React from 'react';
import { Link } from 'react-router-dom';

const Navlink = (props) => {
  return (
    <Link style={{textDecoration: 'none'}} to={props.route}>
      <li className='nav__item'>{props.link}</li>
    </Link>
  )
}

export default Navlink;
