import React from 'react';
import { connect } from 'react-redux';
import Th from './_th';

const tableHead = (props) => {
	const allDays = props.days.map((day) => {
		return <Th key={ day } day={ day.substring(0, 3) } />
	});
	
	return (
		<thead>
			<tr>
				{ allDays }
			</tr>
		</thead>
	);
};

const mapStateToProps = (state) => ({
	days: state.calendar.days
})

export default connect(mapStateToProps)(tableHead);
