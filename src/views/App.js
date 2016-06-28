/**
 * Created by liuhongyi on 16/6/27.
 * Description:入口文件
 */
import React, { Component } from 'react';

class App extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-main">
                {this.props.children}
            </div>
        );
    }
}
export default App;