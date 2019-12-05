<template>
  <div class="cloreimg">
    <!-- 汽车颜色、款式 -->
      <Carcolor :chuan="colorList"></Carcolor>
    <!-- 汽车图片 -->
      <Allcarimg></Allcarimg>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
// 汽车颜色、款式
import Carcolor from "./colorimg/carcolor"
//汽车图片
import Allcarimg from "./colorimg/allcarimg"
export default {
  components:{
    Carcolor,Allcarimg
  },
  computed: {
    ...mapState({
      colorList:state=>state.carcolor.colorList
    })
  },
  methods:{
    ...mapActions({
     getcolorList:"carcolor/getcolorList"
    })
  },
  created(){
    console.log(this.$store)
    this.getcolorList()
  }
}
</script>

<style scoped>
.cloreimg{
  width:100%;
  height:100%;
  background:#eee;
}
</style>