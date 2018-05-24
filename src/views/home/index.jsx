'use strict';
import React from 'react';
import {connect} from 'dva';

class Home extends React.Component {
    render() {
        return <div>
            Home
        </div>;
    }
}
// function mapStateToProps(state) {
//     return state.layout;
// }
export default connect()(Home);