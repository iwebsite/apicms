/**
 * Created by liuhongyi on 16/6/28.
 * Description:封装ajax
 */
import reqwest from 'reqwest';
import { message, notification } from 'antd';

function Ajax(options) {
    let hide = message.loading('正在执行中...', 0);
    let url = '/api'+options.url;
    reqwest({
        url:url,
        data:JSON.stringify(options.data),
        type:'json',
        method:'post',
        crossOrigin:true,
        success:(result)=> {
            hide();
            if(result.status == 1) {
                options.success(result.data);
            } else {
                message.error(result.message);
            }
        },
        error:(error)=> {
            console.log(error);
            hide();
            notification.error({
                message:error.status,
                description:error.statusText
            });
        }
    })
}
export default Ajax;