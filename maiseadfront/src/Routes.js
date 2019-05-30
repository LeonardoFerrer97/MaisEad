import React, { Component } from 'react';
import { Switch, Router, Route } from 'react-router-dom';
import history from './components/Common/history.js';
import DefaultView from './containers/Views/DefaultView';

export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route exact path="/" render={(props) => <DefaultView {...props} path='Home'/>} />
				</Switch>
			</Router>
		);
	}
}