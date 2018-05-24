import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './views';

function RouterConfig({ history }) {
    return (<Router history={history}>
        <Route path="/" component={Layout} />
    </Router>);
}

export default RouterConfig;
