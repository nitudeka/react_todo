import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Navlink = (props) => {
  return (
    <Link style={{textDecoration: 'none'}} to={props.route}>
      <li onClick={props.resetState} className='nav__item'>{props.link}</li>
    </Link>
  )
}

const mapDispatchToProps = (dispatch) => ({
  resetState: () => dispatch({ type: 'RESET_STATE' })
})

export default connect(null, mapDispatchToProps)(Navlink);
