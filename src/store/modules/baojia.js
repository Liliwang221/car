import {city,position,dialogList} from '@/services/index'
const state={
    cityList:[],
    clientList:[],
    proviceList:[]
}
const mutations={
    setCity(state,payload){
      state.cityList=payload
    },
    setClient(state,payload){
        state.clientList=payload
    },
    setProvice(state,payload){
        state.proviceList=payload
    }
}
const actions={
    async city({commit},payload){
        let res=await city(payload);
        // console.log('res...',res)
        commit('setCity',res.data)
    },
    async position({commit},payload){
        let res=await position(payload);
        // console.log('res...',res)
        commit('setClient',res.data)
    },
    async dialogList({commit},payload){
        let res=await dialogList(payload);
        console.log('res...',res)
        commit('setProvice',res.data)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}