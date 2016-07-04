<?php 
namespace app\api\model;
use think\Model;
/**
 * 公共模型
 * [许文明 1010707582@qq.com 2016-07-5]
 */
class Common extends Model
{

	/**
	 * [addData 添加数据]
	 */
	public function addData($data){
		dump($data);
	}

	/**
	 * [editData 修改数据]
	 * @return [type] [description]
	 */
	public function editData($data){
		dump($data);
	}

	/**
	 * [delData 删除数据]
	 * @return [type] [description]
	 */
	public function delData($id){
		dump($id);
	}

}
