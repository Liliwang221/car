import request from '@/utils/request';
//获取经销商列表
export let allList=()=>{
    return request('/v2-dealer-alllist.html?carId=131315&cityId=201&_1575974255454')
}
