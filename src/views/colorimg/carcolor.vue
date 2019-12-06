<template>
  <div class="carcolor">
    <div class="c-type">
      <p @click="colorFn">颜色</p>|
      <p>款式</p>
    </div>

    <transition name="scroll-top">
      <div class="wrap" v-if="showColor">
        <Color :showColor.sync="showColor"></Color>
      </div>
    </transition>

  </div>
</template>

<script>
import Color from "./colors"
export default {
  components:{
    Color
  },
  data(){
    return{
      showColor:false
    }
  },
    props:["chuan"],
    methods:{
      colorFn(){
        this.showColor=true
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
</style>