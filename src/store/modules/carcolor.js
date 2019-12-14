import {getcolorList} from "@/services/index"
const state={
    colorList:{},
    list:[],
}
const mutations={
    setcolorList(state,payload){
        state.colorList=payload 
        let obj=JSON.parse(JSON.stringify(payload))
        let arr=Object.values(obj)
        state.list=arr
    }
}
const actions={
   async getcolorList({commit},payload){
    let res=await getcolorList(payload)
    commit("setcolorList",res.data.data)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}