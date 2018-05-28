'use strict';
import React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';

import './SignForm.scss';

const FormItem = Form.Item;

class SignInForm extends React.PureComponent {
    render() {
        const { getFieldDecorator } = this.props.form;
        return <Form onSubmit={this.handleSubmit} className="sign-form">
            <FormItem>
                {getFieldDecorator('userName', {
                    rules: [{ required: true, message: 'Please input your username!' }],
                })(
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('password', {
                    rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
            </FormItem>
            <FormItem>
                {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                })(
                    <Checkbox>Remember me</Checkbox>
                )}
                <a className="sign-form-forgot" href="javascript:void(0)">Forgot password</a>
                <Button type="primary" htmlType="submit" className="sign-form-button">Sign In</Button>
                Or&nbsp;
                <a href="javascript:void(0)" onClick={() => this.props.toSignUp()}>Sign up now!</a>
            </FormItem>
        </Form>;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.props.operator();
            }
        });
    }
}

const signInForm = Form.create()(SignInForm);
export default signInForm;