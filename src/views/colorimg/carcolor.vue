<template>
  <div class="carcolor">
    <div class="c-type">
      <p @click="colorFn">{{colored}}</p>|
      <p @click="carkuanFn">款式</p>
    </div>

    <transition name="scroll-top">
      <div class="wrap" v-if="showColor">
        <Color :showColor.sync="showColor" :a.sync="colored"></Color>
      </div>
    </transition>

  <transition name="scroll-bottom">
      <div class="wrap" v-if="showCar">
        <Carkuan :showCar.sync="showCar"></Carkuan>
      </div>
    </transition>
  </div>
</template>

<script>
import Color from "./colors";
import Carkuan from "./carkuan"
import {mapActions} from "vuex";
export default {
  components:{
    Color,Carkuan
  },
  data(){
    return{
      showColor:false,
      showCar:false,
      colored:"颜色"
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
    }
}


</script>

<style scoped>
.carcolor{
  width:100%;
  height:40px;
  background:#fff;
  margin-bottom:10px;
 position:-webkit-sticky;
 position:sticky;
 top:0;
 left:0;
 z-index: 999999999999;
}
.carcolor .c-type{
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  color:#454545;
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