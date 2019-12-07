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
   
     <div class="message">
       <p>个人信息</p>
       <p>姓名 <input type="text" placeholder="输入你的真实姓名"> </p>
       <p>手机 <input type="text" placeholder="输入你的真实手机号码"> </p>
       <p>城市 <input type="text" placeholder="北京"> </p>
       <button>询最低价</button>
       <p>选择报价经销商</p>
     </div>
  
  </div>

</template>

<script>
export default {

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
.title{
  width: 100%;
  height: 1.3rem;
  line-height: 1.3rem;
  background: #79cd92;
  text-align: center;
  z-index: 99;
}
.price{
  width: 100%;
  height: 100%;
  
}
.img{
  width: 100px;
  height: 100px;
  background: #ccc;
}

.top{
  display: flex;
  width: 100%;
  height: 120px;
  background: #fff;
  border-bottom: 1px solid #ccc;
}
.con{
 margin-left: 15px;
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
.message p:nth-child(1){
width: 100%;
height: 20px;
background: #ccc;
}
.message input{
  margin-left: 180px;
  border: none;
}

</style>
