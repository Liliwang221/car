<template>
<div class="detail">
  <!-- 每款车 -->
<Bigimgs></Bigimgs>
<Prices></Prices>
<Content></Content>
  <div class="footer">
    <p>询问底价</p>
    <span>本地经销商为你报价</span>
  </div>
</div>
</template>

<script>

import Bigimgs from "./detail/bigimg"
import Prices from "./detail/price"
import Content from "./detail/content"
export default {
 components:{
      Bigimgs,Prices,Content
    }
}
</script>

<style scoped>
.detail{
  width:100%;
  height:100%;
  background: #eee;
  overflow-y: auto;
  position: relative;
}
.detail .footer{
  width:100%;
  height:50px;
  color:#fff;
  text-align: center;
  background: #3AACFF;
  position:fixed;
  bottom:0px;
  left:0px;
}
</style>