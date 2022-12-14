import {Store, install} from "vuex";
import Vue from "vue";
import banner from "./banner";
import about from "./about"
import setting from "./setting";
import project from "./project"
if(!window.Vuex){
  install(Vue);
}


export default new Store({
  modules: {
    project,
    about,
    banner,
    setting,
  },
  strict: true,
});
