<template>
  <div class="Hello">
    <div class="box">
      <!-- {{list.data}} -->
      <!-- {{list}} -->
      <!-- <div v-if="list.length!=0"> -->
      <div v-for="(item,index) in list" :key="index" class="box1">
        <p class="title">{{item.title}}</p>

        <div
          v-for="(item1,index1) in item.children"
          :key="index1"
          class="content"
          @click="showDown(item1.MasterID)"
        >
          <p class="img">
            <img :src="item1.CoverPhoto" alt />
          </p>
          <p class="name">{{item1.Name}}</p>
        </div>

        <!-- 弹框 -->
        <div class="dialog" v-show="show">
          <div v-for="(item,index) in dataList.data" :key="index">
            <!-- {{item}} -->
            <p class="GroupName">{{item.GroupName}}</p>

            <!-- {{item.GroupList}} -->
            <div
              v-for="(item1,index1) in item.GroupList"
              :key="index1"
              class="content1"
              @click="toDetail(item1.SerialID)"
            >
              <!-- {{item1}} -->
              <p class="img">
                <img :src="item1.Picture" alt />
              </p>
              <div class="left">
                <p>{{item1.AliasName}}</p>
                <p>{{item1.DealerPrice}}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- 右侧数据 -->
        
           <div class="right">
           <span v-for="(item,index) in arr" :key="index">{{item}}</span>
        </div>
        
        
       </div>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
// import NavList from './navList'
export default {
  components:{
  //  NavList
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    //vue中的自动计算属性
    //...mapstate 是从vuex解构出来的
    ...mapState({
      //store 下index抛出的分仓库home,home下的state里的list
      list: state => state.home.list,
      dataList: state => state.home.dataList,
      arr: state => state.home.arr
    })
  },
  methods: {
    //页面中请求数据
    //调用仓库中actions中定义的方法
    ...mapActions({
      getMasterBrandList: "home/getMasterBrandList",
      getMakeListByMasterBrandId: "home/getMakeListByMasterBrandId"
    }),
    showDown(id) {
      //  console.log(id)
      (this.show = true), this.getMakeListByMasterBrandId(id);
      //  console.log(this.$store.state.dataList);
    },
    //跳转到详情页面
    toDetail(SerialID) {
      this.$router.push({ path:"/detail", query:{SerialID:SerialID}});
      // console.log(this.$route)
    }
  },
  created() {
    this.getMasterBrandList();
  }
};
</script>

<style scoped>
.hello {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.box {
  position: relative;
}
.box1 .title {
  width: 100%;
  height: 30px;
  background: #ddd;
}
.content {
  display: flex;
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #ddd;
  line-height: 50px;
  /* line-height: 50px; */
}
.content img {
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 10px;
  margin-top: 10px;
}
.name {
  margin-left: 20px;
  margin-top: 5px;
}
.right {
  width: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 200px;
  left: 350px;
}
.right span {
  color: #888;
  font-size: 0.7rem;
  margin: 3px 0;
}
.dialog {
  width: 70%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 0;
  right: 0;
  overflow: auto;
}
.content1 {
  display: flex;
  border-bottom: 1px solid #ddd;
}
.content1 .img img {
  width: 100px;
  height: 80px;
}
.left {
  margin-left: 15px;
  margin-top: 15px;
}
.left p:nth-child(1) {
  color: #888;
  font-size: 18px;
}
.left p:nth-child(2) {
  color: red;
  font-size: 15px;
}
.GroupName {
  width: 100%;
  height: 30px;
  background: #ccc;
  line-height: 30px;
}
</style>