<template>
  <div class="content">
    <div class="tab">
      <span v-for="(item,index) in listData" :key="index" @click="tabclickFn(index)" :class="listIndex===index?'active':''">{{item}}</span>
    </div>
    
    <div class="context">
        <div class="countext" v-for="(item,index) in detailList.list&&detailList.list" :key="index">
        <div class="text">
            <p>{{item.exhaust_str}}/{{item.max_power_str}} {{item.inhale_type}}</p>
        </div>
        <div class="wrapper">
            <div class="wrap">
                <div class="left">
                   <p>{{item.market_attribute.year}}款{{item.car_name}}</p>
                   <span>{{item.horse_power}}马力7档{{item.trans_type}}</span>
                </div>
                <div class="right">
                    <span class="zhi">指导价 {{item.market_attribute.dealer_price_max}}</span>&nbsp;&nbsp; 
                    <span class="startPrice">{{item.market_attribute.dealer_price_min}}起</span>
                </div>
            </div>
            <div class="box">询问底价</div>
        </div>
    </div>
</div>
  </div>
</template>

<script>
import { mapState,mapActions } from "vuex";
export default {
    data(){
        return{
            listIndex:0,
            listData:["全部","2019"],
        }
    },
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
         tabclickFn(index){
   this.listIndex=index
  },
    },
    created(){
    //获取详情数据
    // console.log(this.$store)
    this.getdetailList()
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
    background:#fff;
}
.content .context .wrapper .wrap{
    width:100%;
    display:flex;
}
.content .context .wrapper .wrap .left{
    width:50%;
}
.content .context .wrapper .wrap .left p{
    color:#3D3D3D;
    font-size: 15px;
    padding:10px 0 10px 10px;
}
.content .context .wrapper .wrap .left span{
    font-size: 13px;
    color:#BDBDBD;
    padding-left:10px;
}
.content .context .wrapper .wrap .right{
    width:50%;
    margin-top:15%;
}
.content .context .wrapper .wrap .right .zhi{
    color:#818181;
    font-size: 12px;
}
.content .context .wrapper .wrap .right .startPrice{
    color:#FF2336;
    font-size: 15px;
  
    /* padding-right:5px; */
}
.content .context .box{
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