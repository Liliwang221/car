import request from "@/utils/index"
//获取汽车颜色列表
export let getcolorList=()=>{
    return request("/v2-car-getModelImageYearColor.html?SerialID="+2593)
}