import {getAllcarimgList,getImageTypeList} from "@/services/index"
const state={
    allcarimgList:{},
    colorId:"",//颜色id
    carId:"",//车款id
    showImageList:false,
    count:"",//当前分类图片总数
    ImageID:"",//分类id
    page:1,//当前页数
    pageSize:30,//当前页数
    imageList:[],//分类图片列表
    SerialID:""//车系id
}
const mutations={
  //修改数据
    setAllcarimgList(state,payload){
        state.allcarimgList=payload
    },
    //改变车子颜色id
    setColorId(state, payload){
        state.colorId = payload;
      },
      //改变车款id
    setCarId(state, payload){
        state.carId = payload;
      },
      //修改图片分类id
    setImageId(state,payload){
      state.ImageID=payload
    },
    //图片分类列表
    setshowImage(state,payload){
      state.showImageList=payload
    },
    //设置SerialID
    updateSerialID(state,payload){
      state.SerialID=payload
    },
    setCountimage(state,payload){
      state.count=payload.Count
      state.imageList=payload.List
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
    },
    // 图片分类列表的请求
    async getImageTypeList({commit,state}){
      let params={
        SerialID:state.SerialID,
        ImageID:state.ImageID,
        page:state.page,
        pageSize:state.pageSize
      }
      let res=await getImageTypeList(params)
      let {Count,List}=res.data.data
      commit("setCountimage",{Count,List})
    }
}
export default{
    namespaced:true,
    state,
    mutations,
    actions
}