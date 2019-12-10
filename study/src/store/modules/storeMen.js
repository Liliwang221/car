import {allList} from '@/services/index'
const state={
    storeList:[]
}
const mutations={
    setStore(state,payload){
        //state里的list 进行赋值
        state.storeList=payload
        // console.log(state.storeList)
    },

}
const actions={
    async allList({commit},payload){
        let res=await allList(payload);
        // console.log('res...',res)
        commit('setStore',res.data)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}