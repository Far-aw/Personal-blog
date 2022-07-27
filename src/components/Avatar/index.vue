<template>
  <img 
  class="avatar-container"
  :src="url" 
  :style="{
    //   width:width + 'px',
    //   height:height + 'px'
    width:size + 'px',
    height:size + 'px'
  }"/>
</template>

<script>
export default {
    props:{
        url:{
            type: String, // url属性必须是一个字符串
            required: true, // 属性必传
        },
        // width:{
        //     type:Number,
        // },
        // height:Number
        size:{
            type:Number,
            default:150,  //默认值
        }
    }
}
</script>

<style scoped>  /*加上scoped后会给此样式表添加作用域，避免类名冲突*/
    .avatar-container{
        border-radius: 50%;
        object-fit: cover;
        display: block;
    }
</style>