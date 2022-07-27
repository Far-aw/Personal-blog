<template>
  <div class="test-container">
      <SiteAside />
  </div>
</template>

<script>
import SiteAside from "./"
import "@/style/global.less"
export default {
    components:{
        SiteAside,
    }
}
</script>

<style lang="less">
    .test-container{
        width: 250px;
        height: 800px;
        margin: 0 auto;
        border: 2px solid;

    }
</style>