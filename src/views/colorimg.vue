<template>
  <div class="cloreimg">
      <Carcolor :chuan="colorList"></Carcolor>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
import Carcolor from "./colorimg/carcolor"
export default {
  components:{
    Carcolor
  },
  data(){
    return{
      
  }},
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

<style>

</style>