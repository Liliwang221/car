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
    console.log(res.data.data)
    commit("setcolorList",res.data.data)
    
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}