<template>
  <div class="pricec">
    <!-- 车款价格信息 -->
<div class="info">
     <div class="prices">
       <p>{{detailList.market_attribute&&detailList.market_attribute.dealer_price}}</p>
       <span>指导价 {{detailList.market_attribute&&detailList.market_attribute.official_refer_price}}</span>
     </div>
      <button>{{detailList.BottomEntranceTitle&&detailList.BottomEntranceTitle}}</button>
   </div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
computed: {
        ...mapState({
            detailList:state=>state.detail.detailList
        })
    },
    methods:{
        ...mapActions({
            getdetailList:"detail/getdetailList"
        }),
        reduceimg(){
          this.$router.push("/colorimg")
        },
        
    }
}
</script>

<style scoped>
.pricec{
    width:100%;
    height:75px;
    background:#fff;
}
   .pricec .info{
     width:100%;
     height:75px;
     display:flex;
     justify-content: space-between;
     align-items: center;
     background:#fff;
     margin-bottom:10px;
   }
   .pricec .info .prices{
 padding-left:20px;
   }
  .pricec .info .prices p{
    color:#f00;
    font-size: 18px;
  }
  .pricec .info button{
    width:187px;
     margin-right:20px;
     height: 40px;
     font-size: 18px;
     border:none;
      background:#00AFFF;
      color:#fff;
      border-radius: 5px;
  }
  .pricec .info .prices span{
    font-size: 12px;
     color:#ccc;
  }
</style>