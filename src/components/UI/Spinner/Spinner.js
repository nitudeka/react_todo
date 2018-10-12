import React from 'react';

const Spinner = (props) => {
	const style = {visibility: props.visible ? 'visible' : 'hidden'};

	return (
	  <div style={style} className="sk-three-bounce">
	    <div className="sk-child sk-bounce1"></div>
	    <div className="sk-child sk-bounce2"></div>
	    <div className="sk-child sk-bounce3"></div>
	  </div>
	)
}

export default Spinner;
