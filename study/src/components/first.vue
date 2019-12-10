<template>
  <div class="price">
   <p class="title">可向多个商家咨询最低价，商家及时回复</p>
   <div class="top">
<div class="img">
     <img src="" alt=""> </div>
     <div class="con">
       <p>阿斯顿·马丁DB11</p>
       <p>2019款4.0Tv8 Volante特别版</p>
     </div>
   </div>
    <p class="msg">个人信息</p>
     <div >
       <div class="message">
         <p>姓名 <input type="text" placeholder="输入你的真实中文姓名"> </p>
       <p>手机 <input type="text" placeholder="输入你的真实手机号码"> </p>
       <p>城市 <span @click="start()">北京</span></p>
       </div>
       
       <!-- 弹框 -->
       <transition name="scroll-top">
          <div class="log" v-show="show">
            <div class="over">
              <p class="zidong">自动定位</p>
              <p  v-if="clientList.data!==undefined" class="name">{{clientList.data.CityName}}</p>
            </div>
        <div class="list">
          <p class="shengshi" >省市</p>
          <div v-for="(item,index) in cityList.data" :key="index" class="nameList" >
          <p @click="play">{{item.CityName}} 
           <Dialog2 v-show="open">
             <p v-for="(item,index) in cityList.data" :key="index"></p>
           </Dialog2>
            <span>></span></p>
          </div>
         
        </div>
       </div>
       </transition>
      
      <p class="bot"><button class="btn">询最低价</button></p> 
     </div>
     <button class="person">选择报价经销商</button>
    
  </div>

</template>

<script>
import {mapActions,mapState} from 'vuex'
import Dialog2 from './dialog2'
export default {
  components:{
    Dialog2
  },
  data(){
    return{
      show:false,
      open:false
    }
  },
computed:{
  ...mapState({
    cityList:state=>state.baojia.cityList,
    clientList:state=>state.baojia.clientList
  })
},
methods:{
  ...mapActions({
    city:'baojia/city',
    position:'baojia/position'
  }),
  start(){
    this.show=true,
    this.city(),
    this.position()
  },
  play(id){
    this.open=true
    this.city(id)

  }
},

}

</script>

<style  scoped>
*{
  margin: 0;
  padding: 0;
}
html,body{
  width: 100%;
  height: 100%;
}
.scroll-top-enter,.scroll-top-leave-to{
    transform: translate3d(0, 100%, 0)
}
.scroll-top-enter-active, .scroll-top-leave-active{
    transition: transform .3s linear;
}
.title{
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  background: #79cd92;
  text-align: center;
  z-index: 99;
  color: #fff;
}
.price{
  width: 100%;
  height: 100%;
  /* background: #ddd; */
}
.img{
  width: 80px;
  height: 60px;
 border: 1px solid #ddd;
 margin-left: 10px;
 margin-top: 10px;
}

.top{
  display: flex;
  width: 100%;
  height: 100px;
  background: #fff;
  border-bottom: 1px solid #ccc;
  box-sizing: border-box;
  margin-top: 10px;
}
.con{
 margin-left: 20px;
 margin-top: 10px;
}
.con p:nth-child(1){
  color: #000;
  font-size: 18px;
}
.con p:nth-child(2){
  margin-top: 10px;
  font-size: 18px;
}
.msg{
  /* margin-top: 3px; */
  font-size: 15px;
  background: #ddd;
  width: 100%;
  height: 25px;
  line-height: 25px;
  color: #888;
}
.message {
  width: 100%;
  height: 150px;
  /* border-bottom: 1px solid #ccc; */
  border-top: 1px solid #ddd;
  /* margin-top: 8px; */
  background: #fff;
  box-sizing: border-box;
}
.message input{
  margin-left: 120px;
  border: none;
  color: #000;
  font-size: 17px;
}
.message p{
  width: 100%;
  height: 40px;
  border-bottom: 1px solid #ccc;
  line-height: 40px;
  padding: 0 5px;
}

.message p:nth-child(5){
  width: 100%;
  height: 50px;
}
.message p span:nth-child(1){
  margin-left: 260px;
  margin-right: 10px;
  color: #888;
}
.btn{
  font-size: 15px;
  color: #fff;
  width: 80%;
  background: #3aacff;
  height: 30px;
  border-radius: 3px;
  border: none;
  line-height: 30px;
 margin-left: 25px;
 margin-top: 10px;
}
.person{
  margin-top: 30px;
  border: none;
  background: #fff;
}
.log{
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  background: #fff;
  overflow: auto;
}
.zidong{
  width: 100%;
  height: 25px;
  background: #ddd;
  font-size: 12px;
  line-height: 25px;
  color: #000;
  padding: 0 5px;
}
.shengshi{
 width: 100%;
  height: 25px;
  background: #ddd;
  font-size: 12px;
  line-height: 25px;
  color: #000;
  padding: 0 5px;
}
.name{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 5px;
  font-size: 12px;
}
.nameList p{
   width: 100%;
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}
.nameList span{
  margin-left: 300px;
  font-size: 15px;
  color: #ccc;
}

</style>
