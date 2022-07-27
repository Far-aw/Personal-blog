<template>
  <div class="article-test-container">
      <ArticleListVue :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import ArticleListVue from './ArticleList.vue'

export default {
    components:{
        ArticleListVue,
    },
    data(){
        return {
            
            list:[
                {name:"a", isActive:false},
                {name:"b", isActive:false},
                {name:"c", isActive:true, children:[
                    {name:"c-1",isActive:false},
                    {name:"c-2", isActive:true},
                    {name:"c-3",isActive:false, children:[
                        {name:"c-3-1",isActive:false},
                        {name:"c-3-2",isActive:false},
                        {name:"c-3-3",isActive:true},
                    ]},
                    {name:"c-4",isActive:false},
                ]},
                {name:"d", isActive:false},
                {name:"e", isActive:false}
            ]
        }
    },
    methods:{
        handleSelect(item){
            console.log(item)
        }
    }
}
</script>

<style>

</style>