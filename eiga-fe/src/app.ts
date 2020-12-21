import { createApp } from "vue";
import store from "./store";

import "./app.scss";

import Button from "./components/Button.vue";
import TabBar from "./components/TabBar.vue";

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(store)
  .component("EButton", Button)
  .component("ETabBar", TabBar);

export default App;
