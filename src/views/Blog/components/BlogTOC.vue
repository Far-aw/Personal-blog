<template>
  <div class="blog-toc-container">
    <h2>目录</h2>
    <RightList :list="tocWithSelect" @select="handleSelect" />
  </div>
</template>

<script>
import RightList from "./ArticleList.vue";
import {debounce} from "@/utils"
export default {
  props: {
    toc: {
      type: Array,
    },
  },
  data() {
    return {
      activeAnchor: "",
    };
  },
  components: {
    RightList,
  },

  computed: {
    //根据toc属性以及activeAnchor得到带有isActive属性的toc数组
    tocWithSelect() {
      const getToc = (toc = []) => {
        return toc.map((t) => ({
          ...t,
          isActive: t.anchor === this.activeAnchor,
          children: getToc(t.children),
        }));
      };
      return getToc(this.toc);
    },
    //根据toc得到它们对应的元素
    doms() {
      const doms = [];
      const addTocDoms = (toc) => {
        for (const dom of toc) {
          doms.push(document.getElementById(dom.anchor));
          if (dom.children && dom.children.length) {
            addTocDoms(dom.children);
          }
        }
      };
      addTocDoms(this.toc);
      return doms;
    },
  },
  created(){
    this.setSelectDebounce = debounce(this.setSelect,50)
    this.$bus.$on("mainScroll",this.setSelectDebounce)
  },
  destroyed(){
    this.$bus.$off("mainScroll",this.setSelectDebounce)
  },
  methods: {
    handleSelect(item) {
      location.hash = item.anchor;
    },
    //设置activeAnchor的值
    setSelect(scrollDom){
      if(!scrollDom){
        return;
      }
      this.activeAnchor = ""; //后续要重新设置，先清空之前的状态
      const range = 200;
      for (const dom of this.doms) {
        //看一下当前dom元素是不是应该被选中
        if(!dom){
          continue;
        }
        //得到元素距离窗口顶部的距离
        const top = dom.getBoundingClientRect().top;
        if(top >= 0 && top <= range){
          //规定范围内
          this.activeAnchor = dom.id;
          return;
        }else if(top > range){
          //规定范围下方
          return;
        }else{
          //规定范围上方
          this.activeAnchor = dom.id;
        }

      }
    }
  },
};
</script>

<style scoped lang="less">
.blog-toc-container {
  h2 {
    font-weight: bold;
    letter-spacing: 2px;
    font-size: 1em;
    margin: 0;
  }
}
</style>