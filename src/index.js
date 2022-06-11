import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { legacy_createStore } from 'redux';
import { rootReducer } from './Redux/rootReducer';
import { Provider } from 'react-redux';

const store = legacy_createStore(rootReducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
