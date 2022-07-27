<template>
  <div class="pager-container" v-if="pagerNumber > 1">
    <a @click="handleClick(1)" :class="{ disabled: current === 1 }"
      >|&lt;&lt;</a
    >
    <a @click="handleClick(current - 1)" :class="{ disabled: current === 1 }"
      >&lt;&lt;</a
    >
    <a
      v-for="(n, i) in numbers"
      @click="handleClick(n)"
      :key="i"
      :class="{ active: n === current }"
      >{{ n }}</a
    >
    <a
      @click="handleClick(current + 1)"
      :class="{ disabled: current === pagerNumber }"
      >&gt;&gt;</a
    >
    <a
      @click="handleClick(pagerNumber)"
      :class="{ disabled: current === pagerNumber }"
      >&gt;&gt;|</a
    >
  </div>
</template>

<script>
export default {
  props: {
    current: {
      /**当前页码 */ type: Number,
      default: 1,
    },
    total: {
      /**总数据量 */ type: Number,
      default: 0,
    },
    limit: {
      /**页容量 */ type: Number,
      default: 10,
    } /**可见页码数 */,
    visibleNumber: {
      type: Number,
      default: 10,
    },
  },
  computed: {
    pagerNumber() {
      return Math.ceil(this.total / this.limit);
    },
    visibleMIn() {
      let min = this.current - Math.floor(this.visibleNumber / 2);
      if (min < 1) {
        min = 1;
      }
      return min;
    },
    visibleMax() {
      let max = this.visibleMIn + this.visibleNumber - 1;
      if (max > this.pagerNumber) {
        max = this.pagerNumber;
      }
      return max;
    },
    numbers() {
      let nums = [];
      for (let i = this.visibleMIn; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    },
  },
  methods: {
    handleClick(newPage) {
      if(newPage < 1){
        newPage = 1
      }
      if(newPage > this.pagerNumber){
          newPage = this.pagerNumber
      }
      if(newPage === this.current){
          return;
      }
      //抛出一个事件
      this.$emit("pageChange", newPage);
    },
  },
};
</script>

<style lang="less" scoped>
@import url("~@/style/global.less");
.pager-container {
  display: flex;
  justify-content: center;

  a {
    margin: 0 6px;
    color: @primary;

    &.disabled {
      color: @gray;
      cursor: not-allowed;
    }
    &.active {
      color: @dark;
      cursor: text;
    }
  }
}
</style>