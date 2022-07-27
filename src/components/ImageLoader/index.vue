<template>
  <div class="image-loader-container">
    <img v-if="!evetyThingsOk" class="placeholder" :src="placeholder" alt="" />
    <img
      @load="handload"
      :src="src"
      alt=""
      :style="{ opacity: opcityLoaderChange, transition:`${duration}ms` }"
    />
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      default: 500,
    },
  },
  data() {
    return {
      opcityLoader: false,
      evetyThingsOk:false
    };
  },
  computed: {
    opcityLoaderChange() {
      return this.opcityLoader ? 1 : 0;
    },
  },

  methods: {
    handload() {
      this.opcityLoader = true;
      setTimeout(()=>{
          this.evetyThingsOk = true
          this.$emit("load");
      },this.duration)
    },
  },
};
</script>

<style scoped lang="less">
@import url("~@/style/position.less");
.image-loader-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  img {
    .self-fill();
    object-fit: cover;
  }
}
</style>