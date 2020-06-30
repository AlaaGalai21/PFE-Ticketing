import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';

import Home from './components/Home';
import PrivateRoutes from './components/auth/PrivateRoutes';
import Signin from './components/auth/Signin';
import Profile from './components/user/Profile';
import Signup from './components/user/Signup';
import SigninOrg from './components/auth/SigninOrg';
import SigninAdm from './components/auth/SigninAdm';
import HomeOrg from './components/HomeOrg';
import HomeAdm from './components/HomeAdm';
import CreateEvent from './components/CreateEvent';
import Choose from './components/Choose/Choose';


class Routes extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<PrivateRoutes path="/user/edit/:userId" />
					<Route path="/user/:userId" component={Profile} />
					<Route path="/signup" component={Signup} />
					<Route path="/signin" component={Signin} />
					<Route path="/signinorg" component={SigninOrg} />
					<Route path="/signinadm" component={SigninAdm} />
					<Route path="/Home" component={HomeOrg} />
					<Route path="/home" component={HomeAdm} />
					<Route path="/create" component={CreateEvent} />
					<Route path="/choose" component={Choose} />
				</Switch>
			</div>
		);
	}
}

export default Routes;
