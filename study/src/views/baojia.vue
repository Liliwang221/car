<template>
  <div class="price">
    <First />
  </div>
</template>

<script>
// @ is an alias to /sr
import First from '@/components/first.vue'

export default {
  name: 'home',
  components: {
    First
  }
}
</script>