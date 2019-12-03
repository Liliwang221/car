<template>
  <div class="hello">
    <div class="box">
      <div v-for="(item,index) in list " :key="index" class="box1">
        <!-- 渲染ABCD -->
        <p class="title">{{item.title}}</p>
        <!-- 渲染标题下边的内容 -->
        <div v-for="(item1,index1) in item.data" :key="index1" class="box12" @click="showDown(item1)">
          <!-- {{item1}} -->
            <!-- 内容盒子极渲染 -->
          <!-- <van-popup v-model="show" position="right" :style="{ height: '100%' }" >
            <div v-for="(item,index) in list3" :key="index" >
              <p>{{item.Picture}}</p>
            <p>{{item.AliasName}}</p>
            <p>{{item.DealerPrice}}</p>
            </div>
            
          </van-popup> -->
          <!-- <van-popup v-model="show"  /> -->
          <!-- 点击出现弹框 -->
          <div v-for="(item1,index1) in item.data" :key="index1" class="content" >
            <p class="img">
            <img :src="item1.CoverPhoto" alt />  
          </p>
          <p class="name">{{item1.Name}}</p>
          </div>
          <!-- 弹窗 -->
          <div class="dialog" v-show="show" >
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
          </div>
        </div>
      </div>

      <div class="box2">
        <a :href="'#'+{item}" v-for="(item,index) in list2" :key="index">{{item}}</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import { async } from 'q';
// import Vue from "vue";
// // import 'vant/libs/index.css';
// import { Popup } from "vant";

// Vue.use(Popup);
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      //弹框的显示及隐藏
      show: false, 
      //渲染数据
      list: [],
      //装标题以下内容的盒子
      list2: [
        "#",
        "A",
        "B",
        "C",
        "D",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "Q",
        "R",
        "S",
        "T",
        "W",
        "X",
        "Y",
        "Z"
      ],
      //装弹框内容的盒子
      list3:[]
    };
  },
  created() {
    //渲染主页面的所有内容
    axios
      .get("https://baojia.chelun.com/v2-car-getMasterBrandList.html")
      .then(res => {
        this.list = res.data.data;

        // this.data=res.data.data
        console.log(this.list);
        // 截取字母开头的第一个字母
        this.list.forEach(item => {
          item.title = item.Spelling.slice(0, 1);
          // console.log(item.title)
          // console.log(this.list)
        });
        // 查看是否存在
        let data2 = [];
        this.list.filter(item => {
          if (data2.findIndex(val => item.title == val.title) == -1) {
            data2.push({
              title: item.title
            });
          }
        });
        // 截取的与ABCD是否一样
        data2.forEach(item => {
          item.data = this.list.filter(
            val => val.Spelling.slice(0, 1) == item.title
          );
        });
        this.list = data2;

        console.log(this.list);
      });
      
    // console.log(this.list)
  },
  methods: {
    // 弹框
     showDown(item1){
       console.log(item1);
       axios.get(`https://baojia.chelun.com/v2-car-getMakeListByMasterBrandId.html?MasterID=${item1.MasterID}`).then(res=>{
         this.list3=res.data.data
         console.log(this.list3)
       })
      this.show=true;
    },
    turn(){
      this.$router.push('/detail')
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.box1 {
  // display: flex;
  border-bottom: 1px solid #ccc;
}
.box1 .title {
  background: #ccc;
}
.van-cell__value  {
  display: flex;
}
.content{
  display: flex;
}
.content1{
  display: flex;
}
.left{
  margin-left: 20px;
}
.box12 .name{
  // float: left;
  display: flex;
  margin-left: 10px;
}
.img img {
  width: 50px;
  height: 30px;
  // float: left;
}

 
.name {
  margin-left: 15px;
}
.box2 {
  width: 15px;
  height: 200px;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 200px;
  left: 350px;
}
.box2 a {
  text-decoration: none;
  color: #000;
}
.dialog{
  width: 70%;
  height: 100%;
  background: #ccc;
  position: fixed;
  top: 0;
  right: 0;
  overflow: auto;
}

</style>
