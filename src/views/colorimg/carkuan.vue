<template>
  <div class="styles">
      <div class="allinfo">
          <p>全部款式</p>
      </div>
<!-- tab切换每年的车款 -->
      <div class="wrapper">
          <span v-for="(item,index) in years" :key="index">{{item}}</span>
      </div>
        <!-- 每个车款的性能 -->
            <div class="context">
               <div class="content" v-for="(item,index) in currentList" :key="index">
                <div class="wrap">
                    <p>{{item.key}}</p>
                </div>
            <!-- 每个车款的价格，性能，款式，年份 -->
            <div class="box">
              <div class="tabBox" v-for="(ite,inde) in item.list" :key="inde" @click="carkuanFn(ite.car_id,ite.car_name)">
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
              </div>
            </div>
        </div>  
      </div>
    </div>
</template>

<script>
import {mapState,mapActions,mapMutations} from "vuex"
export default {
 props:["showCar","b"],
data(){
     return{
        carid:""
     }
},
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
        getdetailList:"detail/getdetailList",
        getAllcarimgList:"allcarimg/getAllcarimgList"
    }),
    ...mapMutations({
        setCarId:"allcarimg/setCarId"
    }),
    carkuanFn(carId,carname){
      this.$emit("update:b", carname)
      this.carid=carId
     if(carId instanceof String){
        alert("")
      }else{
        let id=carId*1
         this.setCarId(id)
      }
      this.$emit('update:showCar', false)
    }
 },
 created(){
     this.getdetailList(this.$route.query.SerialID)
     this.getAllcarimgList(this.carid)
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
    margin-top:5px;
}
.styles .wrapper .active{
    color:#00AFFF;
}
.styles .wrapper span{
    padding:0 5px;
}
.styles .context{
    width:100%;
    height:90%;
    overflow-y: scroll;
}
.styles .content{
    width:100%;
}
.styles .content .wrap{
    width:100%;
 }
 .styles .content .wrap p{
     margin-left:10px;
 }

.styles .content .box{
    width:100%;
}
.styles .content .box .tabBox{
    width:100%;
    background:#fff;
}
.styles .content .box .tabBox .kuan{
width:100%;
display:flex;
padding-bottom:5px;
border:1px solid #eee;
}
.styles .content .box .tabBox .kuan .left{
    width:50%;
}
.styles .content .box .tabBox .kuan .left p{
     color:#3D3D3D;
    font-size: 14px;
    padding:10px 0 10px 10px;
}
.styles .content .box .tabBox .kuan .left span{
     font-size: 13px;
    color:#BDBDBD;
    padding-left:10px;
}
.styles .content .box .tabBox .kuan .right{
    width:50%;
    margin-top:10%;
}
.styles .content .box .tabBox .kuan .right .zhi{
     color:#818181;
    font-size: 12px;
}
.styles .content .box .tabBox .kuan .right .startPrice{
    color:#FF2336;
    font-size: 15px;
}
/* .styles .content .box .tabBox .boxs{
    width:100%;
    height:35px;
    line-height: 35px;
    text-align: center;
    color:#00AFFF;
    border-top:1px solid #ccc;
} */
</style>