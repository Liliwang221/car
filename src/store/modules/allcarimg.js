import {getAllcarimgList} from "@/services/index"
const state={
    allcarimgList:{}
}
const mutations={
    setAllcarimgList(state,payload){
        state.allcarimgList=payload
    }
}
const actions={
    async getAllcarimgList({commit},payload){
        let res=await getAllcarimgList(payload)
        console.log("tupian",res.data.data)
        commit("setAllcarimgList",res.data.data)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}