/**
 * Created by liuhongyi on 16/6/27.
 * Description:后台控制器
 */
import React, { Component } from 'react';
import { Row, Col, Menu, Icon } from 'antd';
import { browserHistory } from 'react-router';
import './admin.less'

const SubMenu = Menu.SubMenu;
class Admin extends Component{
    constructor(props) {
        super(props);
    }

    goPath(e) {
        browserHistory.push(e.key);
    }

    render() {
        return (
            <div className="admin-main">
                <Row className="web_top">
                    <Col span={4} className="web_top_logo">logo</Col>
                    <Col span={20} className="web_top_setting">
                        logOut
                    </Col>
                </Row>
                <Row className="admin-con">
                    <Col span={4} className="menu">
                        <Menu mode="inline"
                              defaultSelectedKeys={['/admin']}
                              onClick={this.goPath.bind(this)}>
                            <Menu.Item key="/admin">
                                <Icon type="home"/>后台首页
                            </Menu.Item>
                            <Menu.Item key="/admin/user/index">
                                <Icon type="user"/>用户管理
                            </Menu.Item>
                        </Menu>
                    </Col>
                    <Col span={20} className="admin-con-main">
                        {this.props.children}
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Admin;