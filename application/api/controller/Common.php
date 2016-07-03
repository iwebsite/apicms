<?php
namespace app\api\controller;
use think\Controller;
/**
 * 公共控制器
 */
class Common extends Controller
{

	/**
	 * [__construct description]
	 */
	public function __construct(){
		//判断请求方式是否合法 
		$this->checkMethod();
		//判断用户是否有权限操作当前方法
		$this->checkAuth();
	}

	/**
	 * [getInput 获取请求参数]
	 * 自定义方法
	 * @return [type] [description]
	 */
	public function getInput(){
		return json_decode(file_get_contents('php://input'),true);
	}

	/**
	 * [checkMethod 使用函数助手 判断请求方式是否合法 默认所有请求都是 POST]
	 * @return [type] [description]
	 */
	protected function checkMethod(){
		if ( request()->method() != 'POST' ) {
			return json(['status'=>0,'message'=>'请求方式错误!']);
		}
	}

	/**
	 * [checkAuth 检管理员的权限 add-1  deltet-2 edit-3 ]  
	 * xuwenming
	 * @return [type] [description]
	 */
	protected function checkAuth(){
		$action = request()->action();
		$auth = array(
			'add' 		=> 1,
			'delete' 	=> 2,
			'edit' 		=> 3
		);

		$code = $auth[$action];
		if (!in_array($code, explode(',', session('userInfo.auth')))) {
			return json(['status'=>0,'message'=>'没有操作权限!']);
		}
	}

	/**
	 * [_empty]
	 * @return [type] [description]
	 */
    public function _empty()
    {
        return json(['status'=>0,'message'=>'请求的方法不存在']);
    }

}
