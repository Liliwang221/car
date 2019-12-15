<template>
  <div v-if="storeList.data">
       <div v-for="(item,index) in storeList.data.list" :key="index" class="storeList">
           <span data-hover="hover" class="active">
               
           </span>
           <div class="list"><p>{{item.dealerShortName}}</p>
           <p>万</p>
         <p>{{item.address}}</p>
         <p >售{{item.saleRange}}</p></div>
         
         
       </div>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex'
export default {
    computed:{
        ...mapState({
            storeList:state=>state.storeMen.storeList
        })
    },
    methods:{
        ...mapActions({
            allList:'storeMen/allList'
        })
    },
    created(){
        this.allList()
    }
}
</script>

<style  scoped>
.storeList{
    display: flex;
}
.storeList span.active{
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background: #ccc;
    border: none;
    margin-top: 15px;
}
.list{
    margin-left: 15px;
    margin-bottom: 30px;
    margin-top: 10px;
}
.list p:nth-child(2){
     margin-left: 330px;
     margin-top: -25px;
     font-size: 12px;
     color: red;
}
.list p:nth-child(3){
    font-size: 13px;
    color: #ccc;
    max-width: 200px;
    margin-top: 10px;
}
.list p:nth-child(4){
    margin-left: 290px;
    margin-top: -35px;
    font-size: 15px;
    color: #ccc;
}
</style>

