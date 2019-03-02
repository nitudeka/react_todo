import React from 'react';
import Td from './_td';

const tr = (props) => {
	const weekDates = props.weekDates.map((date) => {
		return <Td key={date} date={date} />
	});

	return (
		<tr>
			{ weekDates }
		</tr>
	);
};

export default tr;
