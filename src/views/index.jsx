'use strict';
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Row, Col, Avatar, Badge } from 'antd';

import { Route, Link, Switch, Redirect } from 'dva/router';

import './index.css';
import Home from './home';
import Tab1 from './tab1';

const { Header, Content, Footer, Sider } = Layout;

class Main extends React.Component {
    render() {
        return <Layout>
            <Header>
                <div className="row-layout">
                    <div className="row-layout-content">
                        <Row gutter={16}>
                            <Col span={4}>
                                <Link to="/home"><img src="src/assets/logo.png" style={{width: "100%", height: "100%"}} /></Link>
                                
                            </Col>
                            <Col span={16}>
                                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']} style={{ lineHeight: '64px' }}>
                                    <Menu.Item key="home"><Link to="/home">Home</Link></Menu.Item>
                                    <Menu.Item key="tab1"><Link to="/tab1">Tab 1</Link></Menu.Item>
                                    <Menu.Item key="tab2">Tab 2</Menu.Item>
                                </Menu>
                            </Col>
                            <Col span={4}>
                                <div className="userArea">
                                    {this.props.login ? <div>
                                        <Badge count={1}>
                                            <Avatar shape="square" icon="user" />
                                        </Badge>
                                    </div> : <div>
                                        <Link to="/home">Sign In</Link>
                                        &nbsp;
                                        <Link to="/home">Sign Up</Link>
                                    </div>}
                                    
                                </div>
                            </Col>
                        </Row>
                    </div>
                </div>
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
function mapStateToProps(state) {
    return state.user;
}
export default connect(mapStateToProps)(Main);