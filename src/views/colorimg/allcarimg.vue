
<template>
  <div class="allcarimg">
    <div class="smallImg" v-for="(item,index) in allcarimgList" :key="index">
      <div class="imgs" v-for="(ite,i) in item.List" :key="i">
         <!-- <img :src="ite.Url"/>  -->
         <!-- {{ite.HighSize}} -->
      </div>

    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
  computed:{
    ...mapState({
      allcarimgList:state=>state.allcarimg.allcarimgList
    })
  },
  methods:{
    ...mapActions({
      getAllcarimgList:"allcarimg/getAllcarimgList"
    })
  },
  created(){
    this.getAllcarimgList()
  }
}
</script>

<style scoped>
.allcarimg{
  width:100%;
  height: 100%;
  overflow-y: auto;
  background:#fff;
}
/* .allcarimg .img{
 background:url("/404/01.jpg")
} */
</style>