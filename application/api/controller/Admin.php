<?php
namespace app\api\controller;
use app\api\controller\Common;
/**
 * 后台管理员管理控制器
 * [许文明 1010707582@qq.com 2016-07-5]
 */
class Admin extends Common
{
    /**
     * [add description]
     */
    public function add(){
        $input = $this->getInput();//获取请求参数

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
     * @param [number] $page [页码 第几页数据 默认第一页]
     * @param [number] $pagenum [每页显示多少条数据 默认10条]
     * @return [json] [$data]
     */
    public function index(){
        $input = $this->getInput();//获取请求参数
        $page = isset($input['page']) ? $input['page'] : 1;
        $pagenum = isset($input['pagenum']) ? $input['pagenum'] : 10;
    	$data = db('user')->page($page,$pagenum)->field('id,user_name,state,auth')->select();
        if ($data) {
            return json(['data'=>$data,'status'=>1,'message'=>'获取用户列表成功!']);
        }else{
            return json(['status'=>0,'message'=>'没有数据啦!']);
        }
    }

}
