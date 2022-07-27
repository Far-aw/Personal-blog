<template>
  <div class="contact-container">
    <ul>
      <li>
        <a target="_blank" :href="data.github">
          <div class="icon"><Icon type="github" /></div>
          <span>{{data.githubName}}</span>
        </a>
        
      </li>
      <li>
        <a :href="`mailto:${data.mail}`">
          <div class="icon"><Icon type="mail" /></div>
          <span>{{data.mail}}</span>
        </a>
      </li>
      <li>
        <a  :href="`tencent://message/?Menu=yes&uin=${data.qq}&Service=300&sigT=45a1e5847943b64c6ff3990f8a9e644d2b31356cb0b4ac6b24663a3c8dd0f8aa12a595b1714f9d45`"
      >
          <div class="icon"><Icon type="qq" /></div>
          <span>{{data.qq}}</span>
        </a>
        <div class="pop">
          <img
            :src="data.qqQrCode"
            alt=""
          />
        </div>
      </li>
      <li>
        <a>
          <div class="icon weixin"><Icon type="weixin" /></div>
          <span>{{data.weixin}}</span>
        </a>
        <div class="pop">
          <img
            :src="data.weixinQrCode"
            alt=""
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Icon from "@/components/Icon";
import { mapState } from "vuex";
export default {
  components: {
    Icon,
  },
  computed:{
    ...mapState("setting",["data"])
  }
};
</script>

<style scoped lang="less">
@import url("~@/style/var.less");
@import url("~@/style/global.less");
.contact-container {
  font-size: 14px;
  color: @gray;
  @itemHeight: 30px;
  ul{
    padding-left: 10px;
    li {
    list-style: none;
    cursor: pointer;
    margin: 15px 0;
    height: @itemHeight;
    line-height: 30px;
    position: relative;
    a {
      cursor: pointer;
      display: flex;
      align-items: center;
    }
    &:hover {
      .pop {
        transform: scaleY(1);
      }
    }
    .icon {
      font-size: 26px;
      width: 36px;
      &.weixin{
          font-size: 32px;
          text-indent: -3px;
      }
    }
    .pop {
      position: absolute;
      bottom: @itemHeight + 5px;
      padding: 10px 15px;
      background: #fff;
      border-radius: 5px;
      transform: scaleY(0);
      transform-origin: center bottom;
      transition: 0.3s;
      img {
        width: 200px;
        height: 200px;
        object-fit: cover;
      }
      &::after {
        content: "";
        position: absolute;
        left: 50%;
        transform: translateX(-50%) rotate(45deg);
        width: 8px;
        height: 8px;
        background: #fff;
        bottom: -4px;
      }
    }
  }
  }
  
}
</style>