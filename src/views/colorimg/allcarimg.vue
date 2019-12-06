
<template>
  <div class="allcarimg">

    <div class="smallImg" v-for="(item,index) in allcarimgList" :key="index">
      <!-- 渲染汽车展示小图片 -->
      <div class="imgs" v-for="(ite,i) in item.List" :key="i">
        <img :src="ite.Url.replace('{0}',1)"/>
      </div>
        <!-- 图片上的遮罩层 -->
        <div class="reduce">
            <p class="p">{{item.Name}}</p>
             <p>{{item.Count}}></p>
        </div> 
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
// import axios from "axios"
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
    //  let {SerialID} = this.$route.query;
    //  console.log(this.$route)
    // axios.get("http://baojia.chelun.com/v2-car-getModelImageYearColor.html?SerialID="+SerialID).then(res=>{
    //   console.log(res)
    //  }
    // )
    this.getAllcarimgList()
  }
}
</script>

<style scoped>
.allcarimg{
  width:100%;
 height:95%;
  overflow-y: scroll;
  background:#fff;
}
.allcarimg .smallImg{
  width: 100%;
   display:flex;
   flex-wrap: wrap;
   justify-content: space-between;
   position:relative;
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
</style>