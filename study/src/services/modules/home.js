import request from '@/utils/request';
//获取首页品牌列表
export let getMasterBrandList=()=>{
    return request('/v2-car-getMasterBrandList.html')
}
//获取弹框列表
export let getMakeListByMasterBrandId=(item1)=>{
    return request(`/v2-car-getMakeListByMasterBrandId.html?MasterID=${item1}`)
}