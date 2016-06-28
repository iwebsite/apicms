/**
 * Created by liuhongyi on 16/6/27.
 * Description:权限控制
 */
import { getSession } from './Session'

export function hasLogin() {
    let userInfo = getSession('userInfo');
    if(userInfo) {
        return true;
    }
}