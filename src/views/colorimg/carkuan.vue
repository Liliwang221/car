<template>
  <div class="styles">
      <div class="allinfo">
          <p>全部款式</p>
      </div>
      <div class="wrapper">
          <span v-for="(item,index) in years" :key="index">{{item}}</span>
      </div>

       <div class="countext" v-for="(item,index) in currentList" :key="index">
        <div class="bigBox">
            <div class="wrap" v-for="(ite,inde) in item.list" :key="inde">
                <div class="kuan">
                <div class="left">
                   <p>{{ite.market_attribute.year}}款{{ite.car_name}}</p>
                   <span>{{ite.horse_power}}马力7档{{ite.trans_type}}</span>
                </div>
                <div class="right">
                    <span class="zhi">指导价 {{ite.market_attribute.dealer_price_max}}</span>&nbsp;&nbsp; 
                    <span class="startPrice">{{ite.market_attribute.dealer_price_min}}起</span>
                </div>
                </div>
                <div class="box">询问底价</div>
            </div>
            
        </div>
  </div>
</template>

<script>
import {mapState,mapActions} from "vuex"
export default {
// data(){

// },
computed:{
    ...mapState({
        detailList:state=>state.detail.detailList,
        year:state=>state.detail.year,
        currentList:state=>state.detail.currentList
    }),
     years(){
            var x = new Set(this.year);
            return [...x];
        }

},
methods:{
    ...mapActions({
        getdetailList:"detail/getdetailList"
    })
 },
 created(){
     this.getdetailList(2593)
 }
}
</script>

<style scoped>
.styles{
    width:100%;
    height:100%;
    background:#eee;
}
.styles .allinfo{
    width:100%;
    height:35px;
    background:#fff;
    line-height:35px;
    text-align: center;
    color:#00AFFF;
}
.styles .wrapper{
    width:100%;
    height:35px;
    background:#fff;
    line-height: 35px;
    color:#00AFFF;
    margin-top:5px;
}
.styles .context{
    width:100%;
}

</style>