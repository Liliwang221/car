import request from "@/utils/index"
//获取汽车图片列表
export let getAllcarimgList=(params)=>{
    return request("/v2-car-getImageList.html",{params})
}