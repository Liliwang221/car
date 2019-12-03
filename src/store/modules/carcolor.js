import {getcolorList} from "@/services/index"
const state={
    colorList:{}
}
const mutations={
    setcolorList(state,payload){
        state.colorList=payload
    }
}
const actions={
   async getcolorList({commit},payload){
    let res=await getcolorList(payload)
    console.log(res)
    commit("setcolorList",res.data)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}