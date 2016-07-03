<?php 
namespace app\api\model;
use app\api\model\Common;
/**
 * 后台管理员模型
 */
class Admin extends Common
{

	public function a($id){
		echo 'Admin model'.$id;
	}

}
