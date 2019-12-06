import {getAllcarimgList} from "@/services/index"
const state={
    allcarimgList:{},
    // colorId:"",
    // carId:""
}
const mutations={
    setAllcarimgList(state,payload){
        state.allcarimgList=payload
    },
    
    // setColorId(state, payload){
    //     state.colorId = payload;
    //     console.log(state.colorId)
    //   },
    //   setCarId(state, payload){
    //     state.carId = payload;
    //     console.log(state.carId)
    //   }
}
const actions={
    async getAllcarimgList({commit}){
        // let params = {SerialID:payload};
        // console.log(params)
        // // 判断是否选择颜色
        // if (state.colorId){
        //   params.ColorID = state.colorId;
        // }
        // // 判断是否选择车款
        // if (state.carId){
        //   params.CarId = state.carId;
        // }
        let res=await getAllcarimgList()
      
        console.log("tupian",res)
        commit("setAllcarimgList",res.data.data)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}