<template>
  <div class="test-container">
      <ImageLoader
        src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?fit=crop&crop=entropy&w=3456&h=2304"
        placeholder="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?w=100"
        @load="handLoader"
      />
  </div>
</template>

<script>
import ImageLoader from "./"
export default {
    components:{
        ImageLoader,
    },
    methods:{
        handLoader(){
            console.log("全都完成")
        }
    }
}
</script>

<style scoped>
    .test-container{
        width: 600px;
        height: 400px;
        margin: 0 auto;
        border: 1px solid black;
    }
</style>