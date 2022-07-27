<template>
  <ul class="article-list-container">
    <li v-for="(item, i) in list" :key="i">
      <span @click="handleClick(item)" :class="{ active: item.isActive }">{{
        item.name
      }}</span>
      <span v-if="item.aside" @click="handleClick(item)" class="aside" :class="{ active: item.isActive }">{{item.aside}}</span>
      <ArticleList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "ArticleList",
  props: {
    // [ {name:"xxx", isActive:true, children:[ {name:"yyy", isSelect: false} ] } ]
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      if (!item.isActive) {
        this.$emit("select", item);
      }
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
.article-list-container {
  list-style: none;
  padding: 0;
  .article-list-container {
    margin: 1em;
  }
  li {
    min-height: 1em;
    line-height: 1.2em;
    cursor: pointer;
    font-size: 12px;
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}
.aside{
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>