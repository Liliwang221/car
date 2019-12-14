<template>
  <div class="content">
      <!-- 详情页内tab切换 -->
    <div class="tab">
      <span v-for="(item,index) in years" :key="index" @click="tabclickFn(index,item)" :class="listIndex===index?'active':''">{{item}}</span>
    </div>
    <!-- 车款底价咨询 -->
    <div class="context">
        <!-- {{currentList}} -->
        <div class="countext" v-for="(item,index) in currentList" :key="index">
        <div class="text">
            <p>{{item.key}}</p>
        </div>
        <div class="wrapper">
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
</div>
  </div>
</template>

<script>
import { mapState,mapActions, mapMutations } from "vuex";
export default {
    data(){
        return{
            listIndex:0,
            data:[]
        }
    },
    computed: {
        ...mapState({
            detailList:state=>state.detail.detailList,
            year:state=>state.detail.year,
            currentList:state=>state.detail.currentList,
            current:state=>state.detail.current
        }),
        years(){
              var x = new Set(this.year);
            return [...x];
        }
    },
    methods:{
        ...mapActions({
            getdetailList:"detail/getdetailList",

        }),
        reduceimg(){
          this.$router.push("/colorimg")
        },
        ...mapMutations({setCurrent:"detail/setCurent"}),
         tabclickFn(index,item){
         this.listIndex=index
            this.setCurrent(item)
            this.getdetailList(this.$route.query.SerialID)
          
        },
       
    }
}
</script>

<style scoped>
.content{
     width:100%;
   }
.content .tab{
     width:100%;
     height:45px;
     background:#fff;
     line-height: 45px;
     margin-top:5px;
   }
.content .tab span{
    padding:10px;
   }
 .active{
     color:#00AFFF;
   }
.content .context{
    width: 100%;
}
.content .context .text{
    width:100%;
    height:25px;
    line-height: 25px;
}
.content .context .text p{
    width:100%;
    margin-left:10px;
    font-size:13px;
    color:#999;
}
.content .context .wrapper{
    width:100%;
   
}
.content .context .wrapper .wrap{
    width:100%;
    margin-top:10px;
     background:#fff;
}
.content .context .wrapper .wrap .kuan{
    width:100%;
     display:flex;
     
}
.content .context .wrapper .wrap .kuan .left{
    width:50%;
}
.content .context .wrapper .wrap .kuan .left p{
    color:#3D3D3D;
    font-size: 14px;
    padding:10px 0 10px 10px;
}
.content .context .wrapper .wrap .kuan .left span{
    font-size: 13px;
    color:#BDBDBD;
    padding-left:10px;
}
.content .context .wrapper .wrap .kuan .right{
    width:50%;
    margin-top:15%;
}
.content .context .wrapper .wrap .kuan .right .zhi{
    color:#818181;
    font-size: 12px;
}
.content .context .wrapper .wrap .kuan .right .startPrice{
    color:#FF2336;
    font-size: 15px;
  
    /* padding-right:5px; */
}
.content .context .wrap .box{
    width:100%;
    height:40px;
    line-height: 40px;
    text-align: center;
    color:#00AFFF;
    font-size: 16px;
    border-top:0.5px solid #eee;
    margin-top:5px;
}
</style>