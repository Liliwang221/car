<template>
  <div class="carcolor">
    <div class="c-type">
      <p @click="colorFn">颜色</p>|
      <p>款式</p>
    </div>
  </div>
</template>

<script>
export default {
    props:["chuan"],
    methods:{
      colorFn(){
        this.$router.push("/colors")
      }
    }
}

</script>

<style scoped>
.carcolor{
  width:100%;
  height:40px;
  background:#fff;
  margin-bottom:10px;
}
.carcolor .c-type{
  width:100%;
  height:100%;
  display:flex;
  align-items: center;
  justify-content: space-evenly;
  color:#454545;
}
</style>