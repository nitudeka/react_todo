import React from 'react';
import { connect } from 'react-redux';
import Tr from './_tr';

const tableBody = (props) => {
	// array consisting of dates of each week in the month
	const datesArray = [];
	for(let i=0; i<props.dates.length/7; i++) {
		datesArray.push(props.dates.slice(i*7, (i + 1) * 7));
	};

	const allDates = datesArray.map((weekDates, i) => {
		return <Tr key={i} weekDates={weekDates} />
	});

	return (
		<tbody>
			{ allDates }
		</tbody>
	);
};

const mapStateToProps = (state) => ({
	dates: state.calendar.dates
});

export default connect(mapStateToProps)(tableBody);
