/*
 * Helper functions for reducers
 *
 */

export const allDatesOfMonth = (month, year) => {
	let allDatesInLastMonth = [];
	let allDatesInMonth = [];
	let allDatesInNextMonth = [];
	// const noOfDaysInAllMonth = 42;

	month = typeof(month) === 'number' && month >= 1 && month <= 12 ? month : new Date().getMonth() + 1;
	year = typeof(year) === 'number' ? year : new Date().getFullYear();

	const tatalNoOfDates = (month, year) => {
		return new Date(year, month, 0).getDate();
	};

	const firstDay = (month, year) => {
		return new Date(year, month - 1, 1).getDay() - 1;
	};

	for (let i=firstDay(month, year); i>=0; i--) {
		allDatesInLastMonth.push(tatalNoOfDates(month - 1, year) - i);
	};

	for (let i=1; i<=tatalNoOfDates(month, year); i++) {
		allDatesInMonth.push(i);
	};

	for (let i=1; i<=tatalNoOfDates(month + 1, year); i++) {
		allDatesInNextMonth.push(i);
	};

	return [].concat(allDatesInLastMonth, allDatesInMonth, allDatesInNextMonth);
};
