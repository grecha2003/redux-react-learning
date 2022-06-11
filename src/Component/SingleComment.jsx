import React from 'react';
import { useState, useEffect } from 'react';
import { updateComment, deleteComment } from '../Redux/actions';
import { useDispatch } from 'react-redux/es/exports';

function SingleComment({ data }) {
	const [comment, setComment] = useState('');
	const { text, id } = data;
	const dispatch = useDispatch();

	const handleUpdate = (e) => {
		e.preventDefault();
		console.log('submitUpdate >', comment);
		dispatch(updateComment(comment, id));
	};

	const handleDelete = (e) => {
		dispatch(deleteComment(id));
		e.preventDefault();
	};

	useEffect(() => {
		if (text) {
			setComment(text);
		}
	}, [text]);

	const handleInput = (e) => {
		setComment(e.target.value);
	};

	return (
		<form onSubmit={handleUpdate} className="comments-item">
			<div onClick={handleDelete} className="comments-item-delete">
				&times;
			</div>
			<input type="text" value={comment} onChange={handleInput} />
			<input type="submit" hidden />
		</form>
	);
}

export default SingleComment;
