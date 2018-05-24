'use strict';
import React from 'react';
import {connect} from 'dva';

class Tab1 extends React.Component {
    render() {
        return <div>
            Tab1
        </div>;
    }
}
// function mapStateToProps(state) {
//     return state.layout;
// }
export default connect()(Tab1);