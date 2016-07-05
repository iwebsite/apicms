/**
 * Created by liuhongyi on 16/7/4.
 * Description:用户管理
 */
import React, {Component} from 'react';
import { Table, Icon, Button } from 'antd';
import Ajax from '../../util/Ajax';
import './user.less'

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            pagenum:20
        }
    }

    componentWillMount() {
        Ajax({
            url:'/Admin/userList',
            data:{page:1,pagenum:this.state.pagenum},
            success:(result)=> {
                console.log(result);
                this.setState({
                    data:result
                })
            }
        });
    }

    render() {
        const columns = [{
            title: '用户名',
            dataIndex: 'user_name',
            key: 'user_name',
            render: (text) => <a href="#">{text}</a>
        }, {
            title: '状态',
            dataIndex: 'state',
            key: 'state',
            render(text) {
                if (text == 1) {
                    return (
                        <span>启用</span>
                    )
                } else {
                    return (
                        <span>禁用</span>
                    )
                }
            }
        }, {
            title: '权限',
            dataIndex: 'auth',
            key: 'auth',
            render(text) {
                let auth = text.split(',');
                let authText = [];
                for(let i=0;i<auth.length;i++) {

                    if(auth[i] == '1') {
                        authText.push('添加');
                    }
                    if(auth[i] == '2') {
                        authText.push('删除');
                    }
                    if(auth[i] == '3') {
                        authText.push('修改');
                    }
                    if(auth[i] == '4') {
                        authText.push('查看');
                    }
                }
                return (
                    <span>{authText.join(',')}</span>
                )
            }
        }, {
            title: '操作',
            key: 'operation',
            render: (text, record) => (
                <div>
                    <Button type="ghost" size="small">编辑</Button> &nbsp;&nbsp;
                    <Button type="ghost" size="small">删除</Button>
                </div>
            )
        }];
        const pagination = {
            total: 20,
            defaultPageSize:this.state.pagenum,
            onChange(current) {
                console.log('Current: ', current);
            }
        };
        return (
            <div className="user">
                <div className="path_name"><Icon type="bars" /> 用户管理</div>
                <Table columns={columns} dataSource={this.state.data} Pagination={pagination} rowKey="id" />
            </div>
        );
    }
}
export default User;