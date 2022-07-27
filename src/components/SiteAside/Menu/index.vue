<template>
  <nav class="menu-container">
    <router-link
      v-for="item in items"
      :key="item.name"
      :to="{name:item.name}"
      :exact = "item.exact"
      active-class="selected"
      exact-active-class=""
    >
      <span class="icon">
        <Icon :type="item.icon" />
      </span>
      <span class=""> {{ item.title }} </span>
    </router-link>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: { Icon },
  data() {
    return {
      items: [
        {
          name: "Home",
          title: "首页",
          icon: "home",
          exact:true,
        },
        {
          name: "Blog",
          title: "文章",
          icon: "blog",
          exact:false, // 激活状态是否要精确匹配
        },
        {
          name: "About",
          title: "关于我",
          icon: "about",
          exact:true,
        },
        {
          name: "Project",
          title: "项目&效果",
          icon: "code",
          exact:true,
        },
        {
          name: "Message",
          title: "留言板",
          icon: "chat",
          exact:true,
        },
      ],
    };
  },

};
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
.menu-container {
  color: @gray;
  margin: 40px 0;
  a {
    display: block;
    display: flex;
    height: 35px;
    align-items: center;
    padding: 0 40px;
    font-size: 14px;
    .icon {
      width: 24px;
    }
    &.selected {
      background: darken(@words, 3%);
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>