/**
 * Created by liuhongyi on 16/6/27.
 * Description:后台首页
 */
import React, { Component } from 'react';

const initializeState = {};
class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = initializeState
    }

    render() {
        return (
            <div>后台首页</div>
        );
    }
}
export default HomePage;