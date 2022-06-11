import { INCREMENT_LIKES, DECREMENT_LIKES } from './types.js';

const initialState = {
	likes: 6,
};

export const likesReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT_LIKES:
			return {
				...state,
				likes: state.likes + 1,
			};
		case DECREMENT_LIKES:
			return {
				...state,
				likes: state.likes - 1,
			};

		default:
			return state;
	}
};
