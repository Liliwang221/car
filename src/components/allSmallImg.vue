<template>
  <div class="wrapper">
    <CommonList :list="{
      query:{},
      limit:30,
      count:count,
      refreshDispatch:'',
      loadMoreDispatch:'',
      value:imageList}"
      >
   
      </CommonList>
     <scroll
            ref="scroll"
            :data="value"
            :pullDownRefresh="pullDownRefreshObj"
            :pullUpLoad="pullUpLoadObj"
            @pullingDown="onPullingDown"
            @pullingUp="onPullingUp"
        >
            <ul>
                <span :key="index" @click="showSwiper(index)" v-for="(item, index) in imageList" :style="{backgroundImage: 'url('+item.Url.replace('{0}', item.LowSize)+')'}"/>
            </ul>
        </scroll>
      
  </div>
</template>

<script>
import {mapActions,mapState} from "vuex"
import CommonList from "./commonList"
export default {
  components:{
    CommonList
  },
  computed:{
    ...mapState({
      imageList:state=>state.allcarimg.imageList,
      count:state=>state.allcarimg.count
    })
  },
  methods:{
    ...mapActions({
      getImageTypeList:"allcarimg/getImageTypeList"
    })
  },
  mounted(){
    this.getImageTypeList()
  }
}
</script>

<style scoped>
.wrapper{
  width:100%;
 height:100%;
  position:fixed;
  top:0;
  left:0;
  background:#fff;
  overflow-y: scroll;
  display:flex;
  flex-wrap:wrap;
}
.wrapper .allimg{
  width:32%;
  border:1px solid #333;
  margin:2px 2px;
}
.wrapper .allimg img{
  width:100%;
  height:100%;
   height:100px; 
}
</style>
