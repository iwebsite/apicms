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
        //判断用户是否过了一个小时的锁定时间
        if ( cache($user_name.'_lock') == 1 ) {
            return json(['status'=>0,'message'=>'连续输入密码3次错误,帐号锁定一个小时中...']);
        }

        if ($data['user_password'] != md5($user_password)) {
            //判断用户密码输入错误三次，锁定一小时
            session($user_name,session($user_name)+1);

            //判断是否连续输入密码三次错误，三次错误锁定帐号一小时
            if (session($user_name) >= 3) {

                cache($user_name.'_lock',1,3600);

                $msg = '连续输入密码3次错误,帐号将锁定一个小时!';
                session($user_name,null);
            }else{
                $msg = '密码不正确!';
            }
            return json(['status'=>0,'message'=>$msg]);
        }
        //清楚当前用户的登录次数
        session($user_name,null);

        //卸载用户变量数据里的密码
        unset($data['user_password']);
        session('userInfo',$data);
        unset($data['state']);
        unset($data['auth']);
        return json(['data'=>$data,'status'=>1,'message'=>'登录成功']);
    }

}
