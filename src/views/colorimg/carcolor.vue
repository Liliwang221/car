<template>
  <div class="carcolor">
    <!-- 图片类型 -->
    <div class="classify">
    <div class="c-type">
        <!-- 颜色 -->
        <p class="colo" @click="colorFn">{{colored}}</p>|
        <!-- 款式 -->
        <p class="cark" @click="carkuanFn">{{kuanshi}}</p>
    </div>
 </div>
    <!-- 图片列表 -->
     <Allcarimage v-if="showImageList"></Allcarimage>

    <!-- 颜色选择 -->
     <!-- 汽车颜色 -->
    <transition name="scroll-top">
      <div class="wrap" v-if="showColor">
        <Color :showColor.sync="showColor" :a.sync="colored"></Color>
      </div>
    </transition>

          <!-- 款式选择 -->
          <!-- 汽车款式 -->
  <transition name="scroll-bottom">
      <div class="wrap" v-if="showCar">
        <Carkuan :showCar.sync="showCar" :b.sync="kuanshi"></Carkuan>
      </div>
    </transition>

    <!-- 图片轮播展示 -->
    <div class="swiper"> </div>
    <Swiper v-if="showImageSwiper"></Swiper>

  </div>
</template>

<script>
import Allcarimage from "@/components/allSmallImg"
import Color from "./colors";
import Carkuan from "./carkuan"
import {mapActions,mapState, mapMutations} from "vuex";
import Swiper from "../colorimg/imageSwiper"
export default {
  
  components:{
    Color,Carkuan,Allcarimage,Swiper
  },
  data(){
    return{
      showColor:false,
      showCar:false,
      colored:"颜色",
      kuanshi:"款式",
      // showImageSwiper:false
    }
  },
    props:["chuan"],
    watch:{
      showColor(){
        let ids=this.$route.query.SerialID
        if(ids instanceof String){
          alert("")
        }else{
          let id=ids*1
           this.getAllcarimgList(id)
        }
      }
  }, 
  computed:{
    ...mapState({
      showImageList:state=>state.allcarimg.showImageList,
      showImageSwiper:state=>state.allcarimg.showImageSwiper
    })

  },
    methods:{
      colorFn(){
        this.showColor=true
      },
      carkuanFn(){
        this.showCar=true
      },
      colorFuns(colorname){
        this.colored=colorname
      },
      ...mapActions({
      getAllcarimgList:"allcarimg/getAllcarimgList"
    }),
    ...mapMutations({
      setshowImage:"allcarimg/setshowImage",
      setshowImageSwiper:"allcarimg/setshowImageSwiper"
    })
    },
    created(){
      let ids=this.$route.query.SerialID
        if(ids instanceof String){
          alert("")
        }else{
          let id=ids*1
           this.getAllcarimgList(id)
        }
        this.setshowImageSwiper(false)
    }
}


</script>

<style scoped>
.carcolor{
  width:100%;
  min-height:40px;
  background:#fff;
  margin-bottom:10px;
 position:-webkit-sticky;
 position:sticky;
 top:0;
 left:0;
 z-index: 9999;
}
.carcolor .classify{
  width:100%;
  min-height:40px;
}
.carcolor .classify .c-type{
  width:100%;
  min-height:40px;
  display:flex;
  align-items: center;
  color:#454545;
 
}
.carcolor .c-type .colo{
  width:50%;
  text-align: center;
}
.carcolor .c-type .cark{
  width:50%;
  text-align: center;
}
.carcolor .wrap{
  width: 100%;
  height: 100%;
  position: fixed;
  top:0;
  left:0;
  z-index: 9999999;
}
.scroll-top-enter,.scroll-top-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-top-enter-active, .scroll-top-leave-active{
    transition:transform .3s linear;
}
.scroll-bottom-enter,.scroll-bottom-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-bottom-enter-active, .scroll-bottom-leave-active{
    transition:transform .3s linear;
}

</style>