<?php
namespace app\api\controller;

/**
 * 空控制器
 * [许文明 1010707582@qq.com 2016-07-5]
 */
class Error
{
	/**
	 * [index]
	 * @return [type] [description]
	 */
    public function index()
    {
        return json(['status'=>0,'message'=>'请求控制器不存在']);
    }

    /**
	 * [_empty]
	 * @return [type] [description]
	 */
    public function _empty()
    {
        return json(['status'=>0,'message'=>'请求的控制器或方法不存在']);
    }
}
