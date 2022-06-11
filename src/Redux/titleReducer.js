import { INPUT_CHANGE } from './types.js';

const initialState = {
	text: '',
};

export const titleReducer = (state = initialState, action) => {
	switch (action.type) {
		case INPUT_CHANGE:
			return {
				...state,
				text: action.text,
			};

		default:
			return state;
	}
};
