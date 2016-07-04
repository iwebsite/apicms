import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import App from './views/App';
import NotFound from './views/NotFound';
import HomePage from './views/admin/HomePage';
import Admin from './views/admin/Admin';
import Login from './views/login/Login';
import User from './views/user/User';
import { hasLogin } from './util/Auth';
import 'antd/dist/antd.less';

render(
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Login} />
			<Route path="login" component={Login} />
			<Route path="admin" component={Admin} onEnter={requireAuth}>
				<IndexRoute component={HomePage} />
				<Route path="user/index" component={User} />
			</Route>
			<Route path="*" component={NotFound}/>
		</Route>
	</Router>,
	document.getElementById('app')
);

function requireAuth(nextState, replace) {
	if (!hasLogin()) {
		replace({
			pathname: '/login',
			state: {nextPathname: nextState.location.pathname}
		})
	}
}