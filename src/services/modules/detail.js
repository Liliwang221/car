import request from "@/utils/index"
//获取详情列表
export let getdetailList=()=>{
    return request("/v2-car-getInfoAndListById.html?SerialID="+2593)
}
