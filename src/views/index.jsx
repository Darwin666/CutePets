'use strict';
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Row, Col, Avatar, Badge, Input, Dropdown, Button } from 'antd';
import { Route, Link, Switch, Redirect } from 'dva/router';

import './index.scss';
import Home from './home';
import Tab1 from './tab1';

const { Header, Content, Footer, Sider } = Layout;

class Main extends React.Component {
    render() {
        const menu = (
            <Menu>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
              </Menu.Item>
              <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
              </Menu.Item>
            </Menu>
          );
        return <Layout>
            <Header className="header">
                <div className="row-layout">
                    <Row>
                        <Col span={4}>
                            <Link to="/home">
                                <img className="img1" src="src/assets/oliver.jpg" />
                                <img className="img2" src="src/assets/logo.png" />
                            </Link>
                        </Col>
                        <Col span={20}>
                            <div className="search-box">
                                <Icon type="search" />
                                <Input className="input" placeholder="搜索"/>
                            </div>
                            <Menu className="menu"
                                theme="light"
                                mode="horizontal"
                                selectedKeys={[this.props.currentTab]} 
                                onClick={this.onMenuClicked.bind(this)}>
                                <Menu.Item className="item" key="home">
                                    <Link to="/home">
                                        <Icon type="home" />Home
                                    </Link>
                                </Menu.Item>
                                <Menu.Item className="item" key="tab1">
                                    <Link to="/tab1">Tab 1</Link>
                                </Menu.Item>
                            </Menu>
                            <div className="userBox">
                                {this.props.login ? <Dropdown overlay={menu} trigger={['click']}>
                                    <div className="avatarBox">
                                        <Badge dot>
                                            <Avatar shape="square" icon="user" />
                                        </Badge>
                                    </div>
                                </Dropdown>: <div>
                                    <Button onClick={() => {
                                        this.props.dispatch({type: 'main/saveLogin', data: !this.props.login});
                                    }}>Sign In or Sign Up</Button>
                                    {/* <Link to="/home">Sign In</Link>
                                    &nbsp;or&nbsp;
                                    <Link to="/home">Sign Up</Link> */}
                                </div>}
                            </div>
                        </Col>
                        {/* <Col xs={0} sm={0} md={0} lg={0} xl={0} xxl={0}>
                        </Col> */}
                    </Row>
                </div>
            </Header>
            <Content className="content">
                <Switch>
                    <Route path="/home" component={Home}></Route>
                    <Route path="/tab1" component={Tab1}></Route>
                    <Redirect to="/home" />
                </Switch>
            </Content>
            <Footer></Footer>
        </Layout>;
    }

    onMenuClicked = ({ item, key, keyPath }) => {
        this.props.dispatch({type: 'main/saveCurrentTab', data: key});
    }
}
function mapStateToProps(state) {
    return {
        ...state.main,
        ...state.user
    };
}
export default connect(mapStateToProps)(Main);