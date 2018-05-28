'use strict';
import React from 'react';
import { connect } from 'dva';
import { Layout, Menu, Icon, Row, Col, Avatar, Badge, Input, Dropdown, Modal } from 'antd';
import { Route, Link, Switch, Redirect } from 'dva/router';

import './index.scss';
import Home from './home';
import Tab1 from './tab1';
import SignInForm from '../components/SignInForm.jsx'
import SignUpForm from '../components/SignUpForm.jsx'

const { Header, Content, Footer } = Layout;

class Main extends React.Component {
    render() {
        return <div>
            <Layout>
                <Header className="header">
                    <div className="row-layout">
                        <Row>
                            <Col span={4}>
                                <Link to="/home">
                                    <img className="img1" src="src/assets/oliver.jpg" alt="oliver" />
                                    <img className="img2" src="src/assets/logo.png" alt="logo" />
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
                                        <Link to="/home"><Icon type="home" />Home</Link>
                                    </Menu.Item>
                                    <Menu.Item className="item" key="tab1">
                                        <Link to="/tab1">Tab 1</Link>
                                    </Menu.Item>
                                </Menu>
                                <div className="userBox">
                                    {this.props.loginFlag ? <Dropdown overlay={this.getUserDropdownMenu()} trigger={['click']}>
                                        <div className="avatarBox">
                                            <Badge dot>
                                                <Avatar shape="square" icon="user" />
                                            </Badge>
                                        </div>
                                    </Dropdown>: <div>
                                        <a className="textButton" onClick={() => this.props.dispatch({type: 'main/saveSignInVisible', data: true})}>Sign In</a>
                                        &nbsp;or&nbsp; 
                                        <a className="textButton" onClick={() => this.props.dispatch({type: 'main/saveSignUpVisible', data: true})}>Sign Up</a>
                                    </div>}
                                </div>
                            </Col>
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
            </Layout>

            <Modal
                title="Sign In"
                visible={this.props.signInVisible}
                footer={null}
                width={348}
                onCancel={() => {
                    this.props.dispatch({type: 'main/saveSignInVisible', data: false});
                }}>
                <SignInForm 
                    operator={() => {
                        this.props.dispatch({type: 'main/saveLoginFlag', data: true});
                        this.props.dispatch({type: 'main/saveSignInVisible', data: false});
                    }}
                    toSignUp={() => {
                        this.props.dispatch({type: 'main/saveSignInVisible', data: false});
                        this.props.dispatch({type: 'main/saveSignUpVisible', data: true});
                    }}
                />
            </Modal>

            <Modal
                title="Sign Up"
                visible={this.props.signUpVisible}
                footer={null}
                width={348}
                onCancel={() => this.props.dispatch({type: 'main/saveSignUpVisible', data: false})}>
                <SignUpForm 
                    operator={() => {
                        this.props.dispatch({type: 'main/saveLoginFlag', data: true});
                        this.props.dispatch({type: 'main/saveSignUpVisible', data: false});
                    }}
                    toSignIn={() => {
                        this.props.dispatch({type: 'main/saveSignUpVisible', data: false});
                        this.props.dispatch({type: 'main/saveSignInVisible', data: true});
                    }}
                />
            </Modal>
        </div>;
    }

    onMenuClicked = ({ item, key, keyPath }) => {
        this.props.dispatch({type: 'main/saveCurrentTab', data: key});
    }

    getUserDropdownMenu = () => {
        return (<Menu onClick={this.onUserDropdownMenuClicked.bind(this)}>
            <Menu.Item key="signOut">
                Sign Out
            </Menu.Item>
        </Menu>);
    }

    onUserDropdownMenuClicked = ({ item, key, keyPath }) => {
        const _this = this;
        switch(key){
            case "signOut" :
                Modal.confirm({
                    title: 'Sign Out',
                    content: 'Sure to sign out?',
                    onOk() {
                        _this.props.dispatch({type: 'main/saveLoginFlag', data: false});
                    }
                });
            break;
        }
    }
}
function mapStateToProps(state) {
    return {
        ...state.main,
        ...state.user
    };
}
export default connect(mapStateToProps)(Main);