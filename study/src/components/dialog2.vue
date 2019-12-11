<template>
<div>
    
   <div class="dialog2">
       <div class="left"></div>
       <div class="right">
           <p v-for="(item,index) in proviceList.data" :key="index">
               {{item.CityName}}
             </p>
       </div>
  </div>  
</div>
 
</template>

<script>














import {mapState} from 'vuex'

export default {
    computed:{
  ...mapState({
    proviceList:state=>state.baojia.proviceList
  })
}

}
</script>

<style  scoped>
.left{
    width: 30%;
    height: 100%;
    background: rgba(0,0,0,.05);
    position: fixed;
    left: 0;
    top: 0;
}
.right{
    width: 70%;
    height: 100%;
    /* background: #ccc; */
    background: #fff;
    position: fixed;
    top: 0;
    left: 30%;
}
</style>