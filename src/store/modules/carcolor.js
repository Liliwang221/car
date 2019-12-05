import {getcolorList} from "@/services/index"
// import {getAllcarimgList} from "@/services/index"
const state={
    colorList:{},
    list:[],
    colorId:"",
    carId:""
}
const mutations={
    setcolorList(state,payload){
        state.colorList=payload 
        let obj=JSON.parse(JSON.stringify(payload))
        let arr=Object.values(obj)
        state.list=arr
    },
    
    setColorId(state, payload){
        state.colorId = payload;
        console.log(state.colorId)
      },
      setCarId(state, payload){
        state.carId = payload;
        console.log(state.carId)
      }
}
const actions={
    
   async getcolorList({commit},payload){
   
    let params = {SerialID:payload};
  
    // 判断是否选择颜色
    if (state.colorId){
      params.ColorID = state.colorId;
    }
    // 判断是否选择车款
    if (state.carId){
      params.CarId = state.carId;
    }
    let res=await getcolorList(params)
    commit("setcolorList",res.data.data)
    
    // getAllcarimgList(params)
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}