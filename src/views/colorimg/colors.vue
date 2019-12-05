<template>
  <div class="colors">
      <div class="allcolor" @click="carColorFn">
          <p>全部颜色</p>
      </div>
      <div class="allyear">
          <p></p>
      </div> 
      <!-- {{colorList}} -->
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
    computed: {
    ...mapState({
      colorList:state=>state.carcolor.colorList
    })
  },
  methods:{
    ...mapActions({
     getcolorList:"carcolor/getcolorList"
    }),
    carColorFn(){
        this.$router.push("/colorimg")
    }
  },
  created(){
    console.log(this.$store)
    this.getcolorList()
  }
}
</script>

<style scoped>
.colors{
    width:100%;
    height:100%;
    background:#eee;
}
.colors .allcolor{
    width:100%;
    height:40px;
    background:#fff;
    text-align: center;
    line-height:40px;
    color:#00AFFF;
    font-size: 17px;
    margin-bottom:10px;
}
.colors .allyear{
    width:100%;
    height:40px;
    overflow-x: scroll;
    display:flex;
    align-items: center;
    flex-wrap: nowrap;
}
</style>