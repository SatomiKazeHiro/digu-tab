import { createApp } from "vue";
import "./styles/normalize.css";
import "./styles/global.less";
import "./styles/link.less";
import App from "./App.vue";

import GridLayout from "vue3-drr-grid-layout";
import "vue3-drr-grid-layout/dist/style.css";

import "virtual:svg-icons-register";

const app = createApp(App);
app.use(GridLayout);

// 全局变量
import { $getConfig } from "@/utils/variable.ts";
app.provide("$getConfig", $getConfig);

app.mount("#app");
