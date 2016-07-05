/**
 * Created by liuhongyi on 16/6/27.
 * Description:登陆界面
 */
import React, { Component } from 'react';
import { Form, Input, Button } from 'antd';
import { browserHistory } from 'react-router';
import { session } from '../../util/Session';
import Ajax from '../../util/Ajax';
import './login.less'

const FormItem = Form.Item;
class Login extends Component {
    constructor(props) {
        super(props);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((errors, values) => {
            if (!!errors) {
                return;
            }
            Ajax({
                url:'/login',
                data:{username:values.username,password:values.password},
                success:(result)=> {
                    session('userInfo',JSON.stringify(result));
                    browserHistory.push('/admin');
                }
            });
        });
    }

    render() {
        const { getFieldProps } = this.props.form;
        const nameProps = getFieldProps('username',{
            rules: [
                { required: true, message: '请输入用户名' }
            ]
        });
        const passwordProps = getFieldProps('password',{
            rules: [
                { required: true, min:6, message: '密码至少为6位' }
            ]
        });
        return (
            <div className="login-main">
                <div className="login_title">login</div>
                <div className="login">
                    <Form horizontal form={this.props.form}>
                        <FormItem
                            hasFeedback
                        >
                            <Input placeholder="请输入用户名"
                                {...nameProps}
                            />
                        </FormItem>
                        <FormItem
                            hasFeedback
                        >
                            <Input type="password" placeholder="请输入密码"
                                {...passwordProps}
                            />
                        </FormItem>
                        <FormItem >
                            <Button style={{width:'100% '}} type="primary" onClick={this.handleSubmit.bind(this)}>登 录</Button>
                        </FormItem>
                    </Form>
                </div>
                <p>&copy; 2016</p>
            </div>
        );
    }
}
Login = Form.create()(Login);
export default Login;