import React from 'react';
import { connect } from 'react-redux';
import Td from './_td';

const tableBody = (props) => {
	console.log(props.dates);

	return (
		<tbody>
			<tr>
				<Td date='1' />
				<Td date='2' />
				<Td date='3' />
				<Td date='4' />
				<Td date='5' />
				<Td date='6' />
				<Td date='7' />
			</tr>
		</tbody>
	);
};

const mapStateToProps = (state) => ({
	dates: state.calendar.dates
});

export default connect(mapStateToProps)(tableBody);
