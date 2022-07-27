<template>
  <div class="test-container">
      <Menu />
  </div>
</template>

<script>
import Menu from './index.vue';
import "@/style/global.less"
export default {
    components: { Menu }
}
</script>

<style scoped>
    .test-container{
        width: 400px;
        height: 600px;
        background: #000;
        border: 2px solid red;
        margin: 0 auto;
    }
</style>