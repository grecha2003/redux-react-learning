import { combineReducers } from 'redux';
import { likesReducer } from './likesReducer';
import { titleReducer } from './titleReducer';
import { commentsReducer } from './commentsReducer';

export const rootReducer = combineReducers({
	likesReducer,
	titleReducer,
	commentsReducer,
});
