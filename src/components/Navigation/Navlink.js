import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { apiURL } from '../../lib/config';

const Navlink = (props) => {
	const onClick = () => {
    props.resetState();
    fetch(`${apiURL}signout`, {
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

const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch({ type: 'RESET_STATE' })
})

export default connect(null, mapDispatchToProps)(Navlink);
