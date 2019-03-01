import React from 'react';
import { connect } from 'react-redux';
import TableHead from './_tableHead';
import TableBody from './_tableBody';

const calendar = (props) => {
	return (
		<div className='calendar__container'>
			<table className='calendar'>
				<TableHead />
				<TableBody />
			</table>
		</div>
	);
};

const mapStateToProps = (state) => ({
	days: state.calendar.days,
	months: state.calendar.months,
	dates: state.calendar.dates
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(calendar);
