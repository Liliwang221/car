<template>
  <div class="Hello">
    <div class="box">
      <!-- {{list.data}} -->
      <div v-for="(item,index) in list" :key="index">

        <p class="title">{{item.title}}</p>
        <div v-for="(item1,index1) in list.data" :key="index1" class="box2" @click="showDown(id)">
          <div v-for="(item1,index1) in list.data" :key="index1" class="content" >
            <p class="img">
            <img :src="item1.CoverPhoto" alt />  
          </p>
          <p class="name">{{item1.Name}}</p>
          </div>
          </div>
       
       
          <!-- <div class="dialog" v-show="show">
             <div v-for="(item,index) in list3" :key="index">
            <p>{{item.GroupName}}</p>
            <div v-for="(item1,index1) in item.GroupList" :key="index1" class="content1">
               <p class="img">
            <img :src="item1.CoverPhoto" alt />  
          </p>
          <div class="left" @click="turn">
            <p>{{item1.AliasName}}</p>
            <p>{{item1.DealerPrice}}</p>
          </div>
            </div>
            </div>
          </div> -->
       
      </div>
         
         
       
    </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
  data(){
    return{
      show:false,
      
      
    }
  },
  computed:{//vue中的自动计算属性
  //...mapstate 是从vuex解构出来的
    ...mapState({
        //store 下index抛出的分仓库home,home下的state里的list
      list:state=>state.home.list,
      dialogList:state=>state.home.dialogList
    })
    
  },
  methods:{
    //页面中请求数据
    //调用仓库中actions中定义的方法
    ...mapActions({
      getMasterBrandList:'home/getMasterBrandList',
      getMakeListByMasterBrandId:'home/getMakeListByMasterBrandId',
     
    }),
     showDown(id){
        // console.log()
        this.show=true,
    this.getMakeListByMasterBrandId(id);

      }
  },
  created(){
    this.getMasterBrandList(),
    console.log(this.list);
    
      }
  
}
</script>

<style scoped>
.hello{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.content{
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
  line-height: 50px;
}
.content img{
   width: 2.4rem;
  height: 2.4rem;
  margin-left: 10px;
} 
.name{
  margin-left: 20px;
  margin-top: 10px;
}
</style>