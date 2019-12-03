<template>
  <div class="home">
    <HelloWorld/>
    <!-- <First /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
// import First from '@/components/first.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
    // First
  }
}
</script>