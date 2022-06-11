import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { inputChange } from '../Redux/actions';

function Title(props) {
	const text = useSelector((state) => {
		const { titleReducer } = state;
		return titleReducer.text;
	});
	const dispatch = useDispatch();

	const handleChange = (e) => {
		dispatch(inputChange(e.target.value));
	};

	return (
		<div className="card-title">
			<div className="card-title-top">
				<input type="text" onChange={handleChange} placeholder="Enter status" />
			</div>
			<p>{text}</p>
		</div>
	);
}

export default Title;
