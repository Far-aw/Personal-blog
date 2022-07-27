<template>
  <div class="blog-comment-container">
    <MessageArea
      title="评论"
      :subTitle="`(${data.total})`"
      :list="data.rows"
      :isListLoading="isLoading"
      @submit="handleSubmit"
    />
    <span>{{content}}</span>
  </div>
</template>

<script>
import MessageArea from "@/components/MessageArea";
import fetchData from "@/mixins/fetchData";
import { getComments, postComment } from "@/api/blog";
export default {
  mixins: [fetchData({ total: 0, rows: [] })],
  components: { MessageArea },
  data() {
    return {
      page: 1,
      limit: 10,
      content:"",
    };
  },
  created(){
    this.$bus.$on("mainScroll",this.handleScroll)
  },
  destroyed(){
    this.$bus.$off("mainScroll",this.handleScroll)
  },
  computed:{
    hasMore(){
      return this.data.rows.length < this.data.total
    },
  },
  methods: {
    handleScroll(dom){ 
      if(this.isLoading || !dom){
        this.content = "加载中..."
        //目前正在加载更多
        return;
      }
      const range = 100;
      const doc =  Math.abs((dom.scrollTop + dom.clientHeight) - dom.scrollHeight);

      if(doc <= range){
        this.fetchMore();
      }
    },
    async fetchData() {
      return await getComments(this.$route.params.id, this.page, this.limit);
    },
    async fetchMore(){
      if(!this.hasMore){
        //没有更多数据了
        this.content = "没有更多数据了"
        return;
      }
      this.isLoading = true;
      this.page++;
      const resp = await this.fetchData();
      this.data.total = resp.total;
      this.data.rows = this.data.rows.concat(resp.rows);
      this.isLoading = false;

    },
    async handleSubmit(formData,callback){
        const resp = await postComment({
            blogid:this.$route.params.id,
            ...formData
        });
        this.data.rows.unshift(resp);
        this.data.total++;
        callback("评论成功");
    }
  },
};
</script>

<style scoped lang="less">
.blog-comment-container {
  margin: 30px 0;
  span{
    display: inline-block;
    position: absolute;
    left: calc(50%);
    }
}
</style>