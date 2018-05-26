'use strict';
import React from 'react';
import {connect} from 'dva';

class Tab1 extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: 'main/saveCurrentTab', data: "tab1"});
    }

    // componentWillUpdate(nextProps, nextState) {
    // }
    
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