<template>
  <div class="carcolor">
    <div class="c-type">
      <p @click="colorFn">颜色</p>|
      <p @click="carkuanFn">款式</p>
    </div>

    <transition name="scroll-top">
      <div class="wrap" v-if="showColor">
        <Color :showColor.sync="showColor"></Color>
        <Carkuan :showCar.sync="showCar"></Carkuan>
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
      showCar:false
    }
  },
    props:["chuan"],
    watch:{
      showColor(){
       this.getAllcarimgList(2593)
      }
  },  
    methods:{
      colorFn(){
        this.showColor=true
      },
      carkuanFn(){
        console.log(123)
        this.showCar=true
      },
      ...mapActions({
      getAllcarimgList:"allcarimg/getAllcarimgList"
    })
    },
    created(){
      this.getAllcarimgList(2593)
    }
}


</script>

<style scoped>
.carcolor{
  width:100%;
  height:40px;
  background:#fff;
  margin-bottom:10px;
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