<template>
  <div class="colors">
      <div class="allcolor">
          <p>全部颜色</p>
      </div>
      <!-- 年份tab切换 -->
      <div class="allyear">
          <p v-for="(item, index, key) of colorList" :key="index" @click="yearColorFn(item,key)"  :class="keyIndex==key?'active':''">{{index}}</p>
      </div> 
      <!-- 颜色 -->
      <div class="colorBox">
        <ul>
          <li v-for="(item,index) in lists" :key="index" @click="colorFun(item.ColorId,item.Name)"><p :style="{background:item.Value}"></p> {{item.Name}}</li>
        </ul>
      </div>
  </div>
</template>

<script>
import {mapState,mapMutations} from "vuex"

export default {
  props:["showColor","a"],
  data(){
    return{
      lists:[],
      keyIndex:0,
      ColorId:"",
    }
  },
    computed: {
    ...mapState({
       colorList:state=>state.carcolor.colorList,
       list:state=>state.carcolor.list,
    })
  },
  methods:{
    ...mapMutations({
     setColorId:"allcarimg/setColorId"
    }),
    yearColorFn(item,key){
        this.lists=item
        this.keyIndex=key
    },
    colorFun(ColorId,colorname){
      //汽车颜色
      this.$emit("update:a",colorname)

      //汽车图片id
      if(ColorId instanceof String){
        alert("")
      }else{
        let id=ColorId*1
         this.setColorId(id)
      }
      this.$emit('update:showColor', false)
      
    }
  },
  created(){
    this.yearColorFn(this.list[0],0);
  }
}
</script>

<style scoped>
.colors{
    width:100%;
    height:100%;
    background:#eee;
}
.colors .allcolor{
    width:100%;
    height:40px;
    background:#fff;
    text-align: center;
    line-height:40px;
    color:#00AFFF;
    font-size: 17px;
    margin-bottom:10px;
}
.colors .allyear{
    width:100%;
    height:40px;
    overflow-x: scroll;
    display:flex;
    align-items: center;
    flex-wrap: nowrap;
    background:#fff;
    overflow-x:scroll;
     margin-bottom:10px;
}
.colors .allyear p{
  width:60px;
  text-align: center;
   flex-shrink: 0;
}
.colors .allyear .active{
  color:#00AFFF;
}
.colors .transition{
  transition:tranlate()
}
.colors .colorBox{
  width:100%;
  background:#fff;
}
.colors .colorBox ul{
  width:100%;
  display:flex;
  flex-wrap: wrap;
  
}
.colors .colorBox ul li{
  width:45%;
  height:35px;
  border:1px solid #9CD5FF;
  display: flex;
  align-items: center;
  margin:10px 5px;
}
.colors .colorBox ul li p{
  width:20px;
  height:20px;
  background:#9CD5FF;
  margin:0 10px;
}
</style>