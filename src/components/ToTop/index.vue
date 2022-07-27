<template>
  <div @click="handleClick" v-show="show" class="to-top-container">
    top
  </div>
</template>

<script>
export default {
    data(){
        return{
            show:false
        }
    },
    created(){
        this.$bus.$on("mainScroll",this.handleScroll)
    },
    destroyed(){
        this.$bus.$off("mainScroll",this.handleScroll)
    },
    methods:{
        handleScroll(dom){
            if(!dom){
                this.show = false;
                return;
            }
            this.show = dom.scrollTop >= 500;
        },
        handleClick(){
            //回到顶部
            this.$bus.$emit("setMainScroll",0)
        }
    }
}
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
.to-top-container{
    background: @primary;
    width: 50px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 50%;
    position: fixed;
    right: 50px;
    bottom: 50px;
    color: #fff;
    z-index: 99;
    cursor: pointer;
}
    
</style>