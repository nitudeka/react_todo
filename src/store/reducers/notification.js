import {
	SEND_USER_DATA_SUCCESS,
	REMOVE_NOTIFICATION
} from '../constants';

const initialState = {
	messages: [],
	statusCodes: []
};

export default (state=initialState, action) => {
	switch (action.type) {
		case SEND_USER_DATA_SUCCESS:
			return {
				...state,
				messages: [ ...state.messages, action.payload.message ],
				statusCodes: [ ...state.statusCodes, action.payload.statusCode ]
			};

		case REMOVE_NOTIFICATION:
			const index = action.payload.index;
			return {
				...state,
				messages: [].concat([...state.messages].slice(0, index), [...state.messages].slice(index + 1)),
				statusCodes: [].concat([...state.statusCodes].slice(0, index), [...state.statusCodes].slice(index + 1))
			};

		default: return state;
	};
};
