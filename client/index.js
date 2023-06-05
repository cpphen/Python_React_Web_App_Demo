import '@babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducers from 'reducers';
import Home from './containers/Home';

const store = createStore(reducers);

render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/' component={Home} />
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
