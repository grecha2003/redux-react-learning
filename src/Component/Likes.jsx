import React from 'react';
import { connect } from 'react-redux';
import { incrementLikes, decrementLikes } from '../Redux/actions';

function likes(props) {
	return (
		<div className="button-controls">
			<button onClick={props.onIncrementLikes}>❤ {props.likes}</button>
			<button onClick={props.onDecrementLikes}>Dislike</button>
		</div>
	);
}

function mapStateToProps(state) {
	const { likesReducer } = state;
	return {
		likes: likesReducer.likes,
	};
}

function mapDispatchToProps(dispatch) {
	return {
		onIncrementLikes: () => {
			return dispatch(incrementLikes());
		},
		onDecrementLikes: () => {
			return dispatch(decrementLikes());
		},
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(likes);