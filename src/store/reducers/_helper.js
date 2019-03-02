/*
 * Helper functions for reducers
 *
 */

/*
* returns all the dates in the requested month of the requested year
* adds few days of the last month and the next months
* to make the total no. of days 42
*/
export const allDatesOfMonth = (month, year) => {
	let allDatesInLastMonth = [];
	let allDatesInMonth = [];
	let allDatesInNextMonth = [];

	// validate the inputs or set the defaults
	month = typeof(month) === 'number' && month >= 1 && month <= 12 ? month : new Date().getMonth() + 1;
	year = typeof(year) === 'number' ? year : new Date().getFullYear();

	// returns total no. of dates in a given month
	const tatalNoOfDates = (month, year) => {
		return new Date(year, month, 0).getDate();
	};

	// returns the first day of the month (integer between 0 to 6)
	const firstDay = (month, year) => {
		return new Date(year, month - 1, 1).getDay() - 1;
	};

	// returns the last day of the month (integer between 0 to 6)
	const lastDay = (month, year) => {
		return 6 - new Date(year, month - 1, tatalNoOfDates(month, year)).getDay();
	};

	// push the dates of the last month to the lastMonth array
	for (let i=firstDay(month, year); i>=0; i--) {
		allDatesInLastMonth.push(tatalNoOfDates(month - 1, year) - i);
	};

	// push all the dates of the month to the month array
	for (let i=1; i<=tatalNoOfDates(month, year); i++) {
		allDatesInMonth.push(i);
	};

	// push the dates of the next month to the nextMonth array
	for (let i=1; i<=lastDay(month, year); i++) {
		allDatesInNextMonth.push(i);
	};

	// concat all the arrays and return it
	return [].concat(allDatesInLastMonth, allDatesInMonth, allDatesInNextMonth);
};
