import React from 'react';
import SingleComment from './SingleComment';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { addComment } from '../Redux/actions';
import uniqid from 'uniqid';

function Comments(props) {
	const [comments, setComments] = useState('');
	const comment = useSelector((state) => {
		const { commentsReducer } = state;
		return commentsReducer.comments;
	});
	const dispatch = useDispatch();

	const handleInput = (e) => {
		setComments(e.target.value);
		console.log('hiComments', e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log('hsComments >>>', comments);
		const id = uniqid();
		dispatch(addComment(comments, id));
	};
	console.log('comment', comment);
	return (
		<div className="card-comment">
			<form onSubmit={handleSubmit} className="comments-item-create">
				<input type="text" value={comments} onChange={handleInput} placeholder="Enter comments" />
				<input type="submit" hidden />
			</form>
			{!!comment.length &&
				comment.map((res) => {
					return <SingleComment key={res.id} data={res} />;
				})}
		</div>
	);
}

export default Comments;
