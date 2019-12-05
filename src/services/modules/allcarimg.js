import request from "@/utils/index"
//获取汽车图片列表
export let getAllcarimgList=()=>{
    return request("/v2-car-getImageList.html?SerialID="+2593)
}