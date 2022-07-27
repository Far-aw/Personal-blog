<template>
    <div class="app-container">
      <Layout>
        <template #left>
          <div class="aside">
            <SiteAside />
          </div>
        </template>
        <template>
          <div class="main">
            <RouterView />
          </div>
        </template>
      </Layout>
      <ToTop />
    </div>
</template>


<script>
import Layout from "@/components/Layout"
import SiteAside from "@/components/SiteAside"
import ToTop from "@/components/ToTop"
export default {
  components:{
    Layout,
    SiteAside,
    ToTop
}
}
</script>

<style scoped lang="less">
  @import url("~@/style/position.less");
  .app-container{
    .self-fill();
    .aside{
      width: 250px;
      height: 100%;
    }
    .main{
      width: 100%;
      height: 100%;
    }
  }
</style>