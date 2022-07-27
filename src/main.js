import Vue from 'vue'
import App from './App.vue'
import "./style/global.less"
import router from "./router"
import "./mock"
import "./api/banner"
import "./eventBus"
import store from './store';
store.dispatch("setting/fetchSetting");
import showMessage from "./utils/showMessage"

Vue.prototype.$showMessage = showMessage;




//注册全局指令（自定义指令）
import vLoading from "./directives/loading"
import vLazy from "./directives/lazy"
Vue.directive("loading",vLoading);
Vue.directive("lazy",vLazy);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')


//博客类别测试
import * as blogApi from "./api/blog"

// blogApi.getBlogTypes().then(r=>{
//   console.log("博客分类",r)
// })

// blogApi.getBlogs(2,10,3).then(r=>{
//   console.log("博客分页",r)
// })


//博客评论测试
// blogApi.getBlog("asdfasdf").then((r) => {
//   console.log(r);
// });

// blogApi
//   .postComment({
//     nickname: "昵称",
//     content: "评论内容，纯文本",
//     blogId: "123",
//   })
//   .then((r) => {
//     console.log(r);
//   });

// blogApi.getComments("123123").then((r) => {
//   console.log(r);
// });



// //事件总线测试
// import eventBus from "./eventBus";

// function handler1(data){
//   console.log("handler1",data)
// }

// function handler2(data){
//   console.log("handler2",data)
// }
// eventBus.$on("event1",handler1);
// eventBus.$on("event1",handler2);
// eventBus.$on("event2",handler1);

// window.eventBus = eventBus;
// window.handler1 = handler1;
// window.handler2 = handler2;