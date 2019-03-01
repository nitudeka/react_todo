import React from 'react';
import { connect } from 'react-redux';

const calendar = (props) => {
	return (
		<div className='calendar__container'>
			<table className='calendar'></table>
		</div>
	);
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(calendar);
