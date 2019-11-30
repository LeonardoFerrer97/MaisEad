import React, { Component } from 'react';
import Callback from './containers/Views/Callback'
import { Switch, Router, Route } from 'react-router-dom';
import history from './components/Common/history.js';
import DefaultView from './containers/Views/DefaultView';
import Auth from "./components/Common/auth0";

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}
export default class Routes extends Component {
	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route exact path="/EaDs" render={(props) => <DefaultView auth={auth}{...props} path='EaDs'/>} />
					<Route exact path="/" render={(props) => <DefaultView auth={auth}{...props} path='Home'/>} />
					<Route exact path="/CompareEaDs" render={(props) => <DefaultView auth={auth}{...props} path='CompareEaDs'/>} />
					<Route exact path="/Comentario" render={(props) => <DefaultView auth={auth}{...props} path='Comentario'/>} />
					<Route exact path="/Avalie" render={(props) => <DefaultView auth={auth}{...props} path='Avalie'/>} />
					<Route path="/callback" render={(props) => { handleAuthentication(props); return <Callback {...props} /> }} />
				</Switch>
			</Router>
		);
	}
}