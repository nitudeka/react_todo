const initialState = {
	days: [
		'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
	],
	months: [
		'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
		'september', 'october', 'november', 'december'
	],
	dates: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
};

export default (state=initialState, action) => {
	switch (action.type) {
		default: return state;
	};
};
