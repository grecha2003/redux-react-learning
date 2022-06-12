import { ADD_COMMENT, UPDATE_COMMENT, DELETE_COMMENT, COMMENTS_LOAD } from './types.js';

const initialState = {
	comments: '',
};

export const commentsReducer = (state = initialState, action) => {
	console.log('commentsReducer', action);
	switch (action.type) {
		case ADD_COMMENT:
			return {
				...state,
				comments: [...state.comments, action.data],
			};

		case COMMENTS_LOAD:
			const commentsNew = action.data.map((res) => {
				return {
					text: res.name,
					id: res.id,
				};
			});
			return {
				...state,
				comments: commentsNew,
			};

		case UPDATE_COMMENT:
			const { data } = action;
			const { comments } = state;
			const itemIndex = comments.findIndex((res) => res.id === data.id);

			const nextComments = [
				...comments.slice(0, itemIndex),
				data,
				...comments.slice(itemIndex + 1),
			];
			return {
				...state,
				comments: nextComments,
			};

		case DELETE_COMMENT:
			return (() => {
				const { id } = action;
				const { comments } = state;
				const itemIndex = comments.findIndex((res) => res.id === id);
				const nextComments = [...comments.slice(0, itemIndex), ...comments.slice(itemIndex + 1)];
				return {
					...state,
					comments: nextComments,
				};
			})();

		default:
			return state;
	}
};
