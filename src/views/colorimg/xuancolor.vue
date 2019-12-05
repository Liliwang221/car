<template>
  <div class="xuancolor">
      <div class="box">
        <ul>
          <li><p class="p"></p> 橘色</li>
          <li><p></p> 橘色</li>
           <li><p class="p"></p> 橘色</li>
          <li><p></p> 橘色</li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.xuancolor{
    width:100%;
    height:100%;
}
.xuancolor .box{
    width:100%;
    height:100%;
    background:#fff;
}
.xuancolor .box ul{
    width:100%;
     display:flex;
     justify-content: space-around;
     flex-wrap: wrap;
}
.xuancolor .box ul li{
    width:160px;
    height:35px;
    line-height:35px;
    border:1px solid #9CD5FF;
    margin:10px 0;
}
.xuancolor .box ul li p{
    width:20px;
    height:20px;
    border:1px solid #ccc;
    margin-left:10px;
    display:inline-block;
    background:chartreuse;
}
</style>