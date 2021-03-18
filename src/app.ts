import { createApp } from "vue";
import store from "./store";

import "./app.scss";

import Button from "./components/Button.vue";
import TabBar from "./components/TabBar.vue";
import Drawer from "./components/Drawer.vue";
import EInput from "./components/EInput.vue";
import ESwitch from "./components/Switch.vue";
import Switcher from "./components/Switcher.vue";

const App = createApp({
  onShow(options) {}
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(store)
  .component("EButton", Button)
  .component("ETabBar", TabBar)
  .component("Drawer", Drawer)
  .component("EInput", EInput)
  .component("ESwitch", ESwitch)
  .component("Switcher", Switcher)

export default App;
