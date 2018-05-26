'use strict';
import React from 'react';
import {connect} from 'dva';

import './index.scss';

class Home extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: 'main/saveCurrentTab', data: "home"});
    }

    // componentWillUpdate(nextProps, nextState) {
    // }

    render() {
        return <div>
            Home
        </div>;
    }
}
function mapStateToProps(state) {
    return {};
}
export default connect(mapStateToProps)(Home);