<?php
namespace app\api\controller;
/**
 * 后台管理员管理控制器
 */
class Login
{
	/**
	 * [login 管理员登录]
	 * @return [type] [description]
	 */
    public function login()
    {
        //判断请求方式是否合法
        if ( request()->method() != 'POST' ) {
            return json(['status'=>0,'message'=>'请求方式错误!']);
        }
        //获取请求参数
        $parm = json_decode(file_get_contents('php://input'),true);
        $user_name = htmlspecialchars(trim($parm['username']));
        $user_password = htmlspecialchars(trim($parm['password']));
        if (!$user_name) {
            return json(['status'=>0,'message'=>'用户名不能为空']);
        }
        if (!$user_password) {
            return json(['status'=>0,'message'=>'密码不能为空']);
        }
        $data = db('user')->where('user_name',$user_name)->find();
        if (!$data) {
            return json(['status'=>0,'message'=>'用户不存在']);
        }
        if ($data['user_password'] != md5($user_password)) {
            return json(['status'=>0,'message'=>'密码不正确']);
        }

        //卸载用户变量数据里的密码
        unset($data['user_password']);
        $_SESSION['userInfo'] = $data;
        unset($data['state']);
        unset($data['auth']);
        return json(['data'=>$data,'status'=>1,'message'=>'登录成功']);
    }

}
