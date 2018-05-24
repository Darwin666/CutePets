'use strict';
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon } from 'antd';
import { Route, Link, Switch, Redirect } from 'dva/router';

import Home from './home';
import Tab1 from './tab1';

const { Header, Content, Footer, Sider } = Layout;

class Main extends React.Component {
    render() {
        return <Layout>
            <Header>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
                    <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
                    <Menu.Item key="tab1"><Link to="/tab1">Tab 1</Link></Menu.Item>
                    <Menu.Item key="tab2">Tab 2</Menu.Item>
                </Menu>
            </Header>
            <Content>
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/tab1" component={Tab1}></Route>
                    <Redirect to="/home" />
                </Switch>
            </Content>
            <Footer></Footer>
        </Layout>;
    }
}
// function mapStateToProps(state) {
//     return state.layout;
// }
export default connect()(Main);