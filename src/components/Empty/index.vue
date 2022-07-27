<template>
  <div class="empty-container">
    <Icon type="empty" />
    <p>{{ text }}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  props: {
    text: {
      type: String,
      default: "无内容",
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/position.less");
@import url("~@/style/var.less");
.empty-container {
  .self-center();
  color: @gray;
  text-align: center;
}
.icon-container{
    font-size: 72px;
}
</style>