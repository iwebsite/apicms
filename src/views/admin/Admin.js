/**
 * Created by liuhongyi on 16/6/27.
 * Description:后台控制器
 */
import React, { Component } from 'react';

class Admin extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="admin-main">
                {this.props.children}
            </div>
        );
    }
}
export default Admin;