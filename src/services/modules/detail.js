import request from "@/utils/index"
//获取详情列表
export let getdetailList=(id)=>{
        return request(`/v2-car-getInfoAndListById.html?SerialID=${id}`)
}
