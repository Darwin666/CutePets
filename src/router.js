import React from 'react';
import { Router, Route } from 'dva/router';
import Main from './views';

function RouterConfig({ history }) {
    return (<Router history={history}>
        <Route path="/" component={Main} />
    </Router>);
}

export default RouterConfig;
