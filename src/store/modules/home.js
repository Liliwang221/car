import {getMasterBrandList,getMakeListByMasterBrandId} from '@/services/index'
const state={
    list:[],
    dataList:[],
    arr:[],
    // setList:[],
    newList:[]
}
const mutations={
    //payload是actions事件里commit的第二个参数
    updateList(state,payload){
        //state里的list 进行赋值
        state.list=payload
        // console.log(state.list)
    },

    dialogList(state,payload){
        // console.log(payload.data)
        state.dataList=payload.data
        // console.log(state.dataList)
    },
    //右边列表数据
    setArr(state,data){
        // console.log(data)
        state.arr=['#'].concat([...new Set(data.data.map(item=>{
            return item.Spelling[0];
        }))])
        // console.log(state.arr)
    },
    // 标题
    setList(state,data){
        let newarr=state.arr;
        let newList=newarr.slice(1).map((ele)=>{
            // console.log(index)
            return{
                title:ele,
                children:data.data.filter((item)=>{
                    // console.log(index)
                    return item.Spelling.slice(0,1)===ele;
                })
            }
        })
        state.list=newList
        // console.log(newList)
    }
}
const actions={
    //调用首页数据
   async  getMasterBrandList({commit},payload){//payload传入的参数
       let res=await getMasterBrandList(payload);
    //    console.log('res...',res);//res请求回来的数据
       //commit提交到mutation   第一个参数是mutation里的方法  第二个参数是传入的值
       commit('updateList',res.data);
       commit('setArr',res.data);
       commit('setList',res.data)

    //    commit('getList',res.data)
   },
   async getMakeListByMasterBrandId({commit},payload){
    //    console.log(payload,"1111111111111111")
       let res=await getMakeListByMasterBrandId(payload);

    //    console.log('res...',res)

       commit('dialogList',res)
   }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}