<?php
// +----------------------------------------------------------------------
// | ThinkPHP [ WE CAN DO IT JUST THINK ]
// +----------------------------------------------------------------------
// | Copyright (c) 2006~2016 http://thinkphp.cn All rights reserved.
// +----------------------------------------------------------------------
// | Licensed ( http://www.apache.org/licenses/LICENSE-2.0 )
// +----------------------------------------------------------------------
// | Author: liu21st <liu21st@gmail.com>
// +----------------------------------------------------------------------
// $Id$

return [
	'__pattern__' => [
        'name' 	=> '\w+',
    ],
    'login'       			=> 'Login/login', //登录
    'Admin/adduser'       	=> 'api/Admin/add?auth=1', 	    //添加管理员
    'Admin/deleteUser'      => 'api/Admin/delete?auth=2', 	//删除管理员
    'Admin/editUser'       	=> 'api/Admin/edit?auth=3', 	//修改管理员资料
    'Admin/userList'       	=> 'api/Admin/index?auth=4', 	//获取管理员列表
    
];
