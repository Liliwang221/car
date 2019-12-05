import {getMasterBrandList,getMakeListByMasterBrandId} from '@/services/index'
const state={
    list:[],
    dataList:[]
}
const mutations={
    //payload是actions事件里commit的第二个参数
    updateList(state,payload){
        //state里的list 进行赋值
        state.list=payload
        console.log(payload)
    },

    dialogList(state,payload){
        state.dataList=payload
    },
    getList(state,payload){
        let arr=['#']
        payload.map((item,index)=>{
            
        })
    }
}
const actions={
    //调用首页数据
   async  getMasterBrandList({commit},payload){//payload传入的参数
       let res=await getMasterBrandList(payload);
       console.log('res...',res);//res请求回来的数据
       //commit提交到mutation   第一个参数是mutation里的方法  第二个参数是传入的值
       commit('updateList',res.data);
       commit('getList',res.data)
   },
   async getMakeListByMasterBrandId({commit},payload){
       let res=await getMakeListByMasterBrandId(payload);
       commit('dialogList',res.data)
   }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}