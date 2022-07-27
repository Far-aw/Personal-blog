<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">左边栏</div>
      </template>
      <template>
        <div class="main">主区域</div>
      </template>
      <template #right>
        <div class="right">右边栏</div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue";
export default {
  components: {
    Layout,
  },
};
</script>

<style scoped lang="less">
.test-container {
  width: 60%;
  height: 600px;
  border: 2px solid;
  .left {
    width: 200px;
    height: 100%;
    background: #f40;
  }
  .right {
    width: 150px;
    height: 100%;
    background: yellow;
  }
}
</style>