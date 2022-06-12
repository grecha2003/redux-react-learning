import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore, compose, applyMiddleware } from 'redux';
import { rootReducer } from './Redux/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { spamFilter } from './Redux/middleWare';

const store = legacy_createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk, spamFilter),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
