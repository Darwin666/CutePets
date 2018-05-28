'use strict';
import React from 'react';
import { Form, Input, Button, Icon, Checkbox } from 'antd';

import './SignForm.scss';

const FormItem = Form.Item;

class SignUpForm extends React.PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            confirmDirty: false,
        }
    }

    render() {
        const { getFieldDecorator } = this.props.form;

        return <Form onSubmit={this.handleSubmit} className="sign-form">
            <FormItem >
                {getFieldDecorator('username', {
                    rules: [{ required: true, message: 'Please input your username!', whitespace: true }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
            </FormItem>
            <FormItem >
                {getFieldDecorator('email', {
                    rules: [{
                        type: 'email', message: 'The input is not valid E-mail!',
                    }, {
                        required: true, message: 'Please input your E-mail!',
                    }],
                })(
                    <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="E-mail" />
                )}
            </FormItem>
            <FormItem >
                {getFieldDecorator('password', {
                    rules: [{
                        required: true, message: 'Please input your password!',
                    }, {
                        validator: this.validateToNextPassword,
                    }],
                })(
                    <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Password" />
                )}
            </FormItem>
            <FormItem >
                {getFieldDecorator('confirm', {
                    rules: [{
                        required: true, message: 'Please confirm your password!',
                    }, {
                        validator: this.compareToFirstPassword,
                    }],
                })(
                    <Input type="password" onBlur={this.handleConfirmBlur} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Confirm Password" />
                )}
            </FormItem>
            <FormItem>
            {getFieldDecorator('agreement', {
                valuePropName: 'checked',
            })(
                <Checkbox>I have read the <a href="javascript:void(0)">agreement</a></Checkbox>
            )}
            </FormItem>
            <FormItem >
                <Button type="primary" htmlType="submit" className="sign-form-button">Sign Up</Button>
                Or&nbsp;
                <a href="javascript:void(0)" onClick={() => this.props.toSignIn()}>Sign in now!</a>
            </FormItem>
        </Form>;
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                this.props.operator();
            }
        });
    }

    handleConfirmBlur = (e) => {
        const value = e.target.value;
        this.setState({ confirmDirty: this.state.confirmDirty || !!value });
    }

    compareToFirstPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && value !== form.getFieldValue('password')) {
            callback('Two passwords that you enter is inconsistent!');
        } 
        else {
            callback();
        }
    }

    validateToNextPassword = (rule, value, callback) => {
        const form = this.props.form;
        if (value && this.state.confirmDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback();
    }
}

const signUpForm = Form.create()(SignUpForm);
export default signUpForm;