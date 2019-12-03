import {getdetailList} from "@/services/index"
const state={
    detailList:{}
}
const mutations={
    setdetailList(state,payload){
        state.detailList=payload
    }
}
const actions={
    async getdetailList({commit},payload){
        let res=await getdetailList()
        console.log(res.data.data)
        payload=res.data.data
        commit("setdetailList",payload)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}