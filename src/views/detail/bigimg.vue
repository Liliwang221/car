<template>
  <div class="bigimg">
    <!-- 每款车的图片总数 -->
    <div class="swiper" @click="reduceimg">
     <img :src="detailList.CoverPhoto&&detailList.CoverPhoto"/>
     <p class="p">{{detailList.pic_group_count&&detailList.pic_group_count}}张照片</p>
   </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
    computed: {
        ...mapState({
            detailList:state=>state.detail.detailList
        })
    },
    methods:{
        ...mapActions({
            getdetailList:"detail/getdetailList"
        }),
        reduceimg(){
          this.$router.push("/colorimg")
        }
    },
    created(){
    //获取详情数据
    // console.log(this.$store)
    this.getdetailList()
  }
}
</script>

<style scoped>
.bigimg{
width:100%;
}
.bigimg .swiper{
    width:100%;
    height:200px;
    position: relative;
  }
.bigimg .swiper .p{
    position: absolute;
    right:20px;
    bottom:30px;
    padding:3px 5px;
    background:rgba(0,0,0,0.4);
    color:#fff;
    font-size:12px;
    border-radius: 15px;
  }
   .bigimg .swiper img{
     width:100%;
     height:100%;
   }
</style>