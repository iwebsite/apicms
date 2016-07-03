<?php
namespace app\api\controller;
use app\api\controller\Common;
/**
 * 后台管理员管理控制器
 */
class Admin extends Common
{

    /**
     * [add description]
     */
    public function add(){

        $admin = model('Admin');
        $admin->addData(array('a'=>1));
    }

    /**
     * [delete description]
     */
    public function delete(){
        echo 'delete';
    }

    /**
     * [edit description]
     */
    public function edit(){
        echo 'edit';
    }

    /**
     * [list 获取管理员列表]
     * @return [type] [description]
     */
    public function index(){
    	echo 'index';
    }


}
