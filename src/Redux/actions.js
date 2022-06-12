import {
	INCREMENT_LIKES,
	DECREMENT_LIKES,
	INPUT_CHANGE,
	ADD_COMMENT,
	UPDATE_COMMENT,
	DELETE_COMMENT,
	COMMENTS_LOAD,
	LOADER_ON,
	LOADER_OFF,
	ERROR_ON,
	ERROR_OFF,
} from './types.js';

export function incrementLikes() {
	return {
		type: INCREMENT_LIKES,
	};
}

export function decrementLikes() {
	return {
		type: DECREMENT_LIKES,
	};
}

export function inputChange(text) {
	return {
		type: INPUT_CHANGE,
		text,
	};
}

export function addComment(text, id) {
	return {
		type: ADD_COMMENT,
		data: { text, id },
	};
}

export function updateComment(text, id) {
	return {
		type: UPDATE_COMMENT,
		data: { text, id },
	};
}

export function deleteComment(id) {
	return {
		type: DELETE_COMMENT,
		id,
	};
}

export function commentsLoad(comments) {
	return async (dispatch) => {
		try {
			dispatch(loaderOn());
			const response = await fetch('https://jsonplaceholder.typicode.com/comments?_limit=10');
			const jsonData = await response.json();
			dispatch({
				type: COMMENTS_LOAD,
				data: jsonData,
			});
			dispatch(loaderOff());
		} catch (error) {
			dispatch(loaderOff());
			dispatch(errorOn('Ошибка сервера, попробуйте позже'));
		}
	};
}

export function loaderOn() {
	return {
		type: LOADER_ON,
	};
}
export function loaderOff() {
	return {
		type: LOADER_OFF,
	};
}

export function errorOn(text) {
	return (dispatch) => {
		dispatch({
			type: ERROR_ON,
			text,
		});
		setTimeout(() => {
			dispatch(errorOff());
		}, 10000);
	};
}

export function errorOff() {
	return {
		type: ERROR_OFF,
	};
}
