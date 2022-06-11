import {
	INCREMENT_LIKES,
	DECREMENT_LIKES,
	INPUT_CHANGE,
	ADD_COMMENT,
	UPDATE_COMMENT,
	DELETE_COMMENT,
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
