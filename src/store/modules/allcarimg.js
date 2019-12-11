import {getAllcarimgList} from "@/services/index"
const state={
    allcarimgList:{},
    colorId:"",//颜色id
    carId:"",//车款id
    ImageID:"",//分类id
    page:0,//当前页数
    pageSize:30,//当前页数
    imageList:[],//分类图片列表

}
const mutations={
    setAllcarimgList(state,payload){
        state.allcarimgList=payload
    },
    setColorId(state, payload){
        state.colorId = payload;
      },
    setCarId(state, payload){
        state.carId = payload;
      },
    setImageId(state,payload){
      state.ImageID=payload
    }
}
const actions={
    async getAllcarimgList({commit},payload){
        let params = {SerialID:payload};
        // 判断是否选择颜色
        if (state.colorId){
          params.ColorID = state.colorId;
        }
        // 判断是否选择车款
        if (state.carId){
          params.CarId = state.carId;
        }
        let res=await getAllcarimgList(params)
        commit("setAllcarimgList",res.data)
    }
}

export default{
    namespaced:true,
    state,
    mutations,
    actions
}