import { allDatesOfMonth } from './_helper';

const initialState = {
	days: [
		'sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'
	],
	months: [
		'january', 'february', 'march', 'april', 'may', 'june', 'july', 'august',
		'september', 'october', 'november', 'december'
	],
	dates: allDatesOfMonth()
};

export default (state=initialState, action) => {
	switch (action.type) {
		default: return state;
	};
};
