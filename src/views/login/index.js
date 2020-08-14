import React, { Component } from 'react';
import './index.scss';
import { Form, Input, Button, Checkbox } from 'antd';

class Login extends Component {
    constructor() {
        super();
        this.state = {};

        // this.onFinish = this.onFinish.bind(this);
        // this.onFinishFailed = this.onFinishFailed.bind(this);
    }

    layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };
    tailLayout = {
        wrapperCol: { offset: 8, span: 16 },
    };

    onFinish = values => {
        console.log('Success:', values);
    };
    onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    render() {
        return (
            <div className="Login">
                <div className="form-wrap">
                    <Form
                        {...this.layout}
                        name="basic"
                        initialValues={{ remember: true }}
                        // onFinish={this.onFinish.bind(this)}
                        onFinish={() => this.onFinish}
                        onFinishFailed={this.onFinishFailed.bind(this)}
                    >
                        <Form.Item
                            label="用户"
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="密码"
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item {...this.tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>自动记录</Checkbox>
                        </Form.Item>

                        <Form.Item {...this.tailLayout}>
                            <Button type="primary" htmlType="submit">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </div>

            </div>
        )
    }
}
export default Login;