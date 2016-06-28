/**
 * Created by liuhongyi on 16/6/28.
 * Description:存储数据
 */
//存储数据
export function session(key,value) {
    sessionStorage.setItem(key,value)
}

//获取数据
export function getSession(key) {
    return sessionStorage.getItem(key);
}

//删除数据
export function delSession(key) {
    sessionStorage.removeItem(key)
}