import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import { Icon, Tag } from "iview";
import "iview/dist/styles/iview.css";
import "github-markdown-css";
import hljs from "highlight.js";
import router from './router';

Vue.use(router);





import "highlight.js/styles/atelier-dune-dark.css"; //样式文件
Vue.directive("highlight", function(el) {
  let blocks = el.querySelectorAll("pre code");
  blocks.forEach((block) => {
    hljs.highlightBlock(block);
  });
});
Vue.component("Icon", Icon);
Vue.component("Tag", Tag);

Vue.config.productionTip = false;
Vue.use(ElementUI);

new Vue({
  el: "#app",
  router, // 传入路由能力
  render: h => h(App)
});