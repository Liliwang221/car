import request from '@/utils/request';
//自动定位
export let position=()=>{
    return request('/location-client.html')
}
//获取全国城市列表
export let city=()=>{
    return request('/v1-city-alllist.html')
}
//获取省市列表
export let dialogList=(id)=>{
    return request(`/v1-city-alllist.html?provinceid=${id}`)
}