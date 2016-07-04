<?php 
namespace app\api\model;
use app\api\model\Common;
/**
 * 后台管理员模型
 * [许文明 1010707582@qq.com 2016-07-5]
 */
class Admin extends Common
{

	public function a($id){
		echo 'Admin model'.$id;
	}

}
