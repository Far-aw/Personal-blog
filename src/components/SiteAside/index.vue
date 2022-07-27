<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url = " data.avatar" />
      <h1 class="title">{{data.siteTitle}}</h1>
    </template>
      <Menu />
      <Contact v-if="data"/>
      <p v-if="data">{{data.icp}}</p>
  </div>
</template>

<script>
import Avatar from '../Avatar/index.vue';
import Menu from './Menu/index.vue';
import Contact from './Contact/index.vue';
import { mapState } from 'vuex';
export default {
    components: { Avatar, Menu, Contact },
    computed:{
      ...mapState("setting",["data"])
    }

}
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
    .site-aside-container {
      width: 100%;
      height: 100%;
      background: @dark;
      padding: 20px 0;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: auto;
    }
    .avatar-container{
        margin: 0 auto;
    }
    .contact-container{
        padding: 0;
    }
    p{
        margin: 40px 0;
        text-align: center;
    }
    .title {
  font-size: 1.2em;
  color: #fff;
  text-align: center;
}
</style>