
<template>
  <div class="allcarimg">
    <div class="box" v-if="allcarimgList.msg=='成功'">
    <div class="smallImg" v-for="(item,index) in allcarimgList.data" :key="index">
      <!-- 渲染汽车展示小图片 -->
      <div class="imgs" v-for="(ite,i) in item.List" :key="i">
        <img :src="ite.Url.replace('{0}',1)"/>
      </div>
        <!-- 图片上的遮罩层 -->
        <div class="reduce" @click="clickImageID(item.Id)">
            <p class="p">{{item.Name}}</p>
             <p>{{item.Count}}></p>
        </div> 
      </div>

    </div><div class="wrap" v-else>
      <p>还没有内容</p>
    </div>
   
  </div>
</template>

<script>

import {mapState,mapActions,mapMutations} from "vuex"
export default {
  data(){
    return{
      // showImageList:false
    }
  },

  computed:{
    ...mapState({
      allcarimgList:state=>state.allcarimg.allcarimgList,
      showImageList:state=>state.allcarimg.showImageList
    })
  },
  methods:{
    ...mapActions({
      getAllcarimgList:"allcarimg/getAllcarimgList"
    }),
     ...mapMutations({
      setImageId:"allcarimg/setImageId",
      setshowImage:"allcarimg/setshowImage",
      updateSerialID:"allcarimg/updateSerialID"
    }),
    //点击分类进入分类列表
    clickImageID(id){
      console.log("133",id)
      this.setImageId(id)
      this.setshowImage(true)
    }
  },
  created(){
    let ids=this.$route.query.SerialID
    if(ids instanceof String){
      alert("")
    }else{
      let id=ids*1
    this.getAllcarimgList(id)
    this.updateSerialID(id)
    }
  }
} 
</script>

<style scoped>
.allcarimg{
  width:100%;
 height:92.5%;
  background:#fff;
}
.allcarimg .smallImg{
  width: 100%;
   display:flex;
   flex-wrap: wrap;
   justify-content: space-between;
   position:relative;
     overflow-y: scroll;
}
.allcarimg .smallImg .imgs{
  width:32.5%;
}
.allcarimg .smallImg img{
  width:100%; 
  height:85px;
}
.allcarimg .smallImg .reduce{
 width:32.5%;
 height:85px;
 background:rgba(0, 0, 0, 0.5);
 position: absolute;;
 top:0;
 left:0;
 color:#fff;
 text-align: center;
}
.allcarimg .smallImg .reduce .p{
  margin-top:20px;
}
.allcarimg .wrap{
  width:100%;
  text-align: center;
  margin: 0 auto;
}
</style>