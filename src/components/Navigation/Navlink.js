import React from 'react';
import { connect } from 'react-redux';
import { resetState } from '../../store/actions'
import { Link } from 'react-router-dom';

const Navlink = (props) => {
	const onClick = () => {
		props.resetState();
		window.localStorage.clear();
	}

  return (
    <Link style={{textDecoration: 'none'}} to={props.route}>
      <li onClick={onClick} className='nav__item'>{props.link}</li>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch(resetState())
})

export default connect(null, mapDispatchToProps)(Navlink);
