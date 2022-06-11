import { legacy_createStore } from 'redux';

const initialState = {
	likes: 6,
};

const reducer = (state = initialState, action) => {};

const store = legacy_createStore(reducer);

export default store;
