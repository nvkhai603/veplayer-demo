/**
 * Copyright 2024 (c) Beijing Volcano Engine Technology Co., Ltd.
 * SPDX-License-Identifier: MIT
 */

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { NavBar } from 'vant';
import App from './App.vue';
import router from './router';
import VePlayer from './player';
import flexible from './utils/flexible';
// 导入组件
import Loading from './components/Loading.vue';
import 'vant/lib/index.css'; // 引入 Vant 样式

import './index.less';

// 初始化响应式布局
flexible(window, document);

// 创建Vue应用
const app = createApp(App);

// 全局注册组件
app.component('loading', Loading);

// 从视频点播控制台-点播SDK-应用管理 上线发布前替换成自己业务的license
VePlayer.setLicenseConfig({
  license: {
    sign: 'PBePEDcVnKHP8pBQJaFW0A7Z2uHn9ezN3GmSuYvzC8CBDqBYcq99mHv7YTnWNj4SgvQABaQWRAdwdU13wMdmjinTqS4p/T6YTHiFbYRQeq7s/IXMcoU/B6CX9pP8VsPgl6kOwrIyD6r2UNGMGvjp07UcLBMHID7dqIBtgfBBh2nd4zt3BXCAR6gr3hiTjurd3w345ZUdeRjfBKu4aY9+BFZ+vzXSlKnPetoO8poJi5/LfMVSk3UpSn3e2ZU/25pdhlWZXS3fFzwIWyS4gG6AIgIQ4Vq0o0Q6Zi+B6ZQ99wY4dzOFJeDwgMoiEgdRv2dEveGsji1hRU/jTsm2797iHw==',
    content:
      'eyJJZCI6IjE2Nzc2MzA3MjIiLCAiVmVyc2lvbiI6MiwgIkNoYW5uZWwiOiJ2b2QiLCAiVHlwZSI6MiwgIldpbGRjYXJkRG9tYWluIjoiKi52b2xjdmlkZW8uY29tIiwgIk1vZHVsZXMiOlt7Ik5hbWUiOiJ3ZWJfdm9kX3BsYXkiLCAiRWRpdGlvbiI6InByZW1pdW1fZWRpdGlvbiIsICJTdGFydFRpbWUiOjE3NDE4Njg0ODgyNTUsICJFeHBpcmVUaW1lIjoxODA0OTQwNDg4MjU1fV0sICJGaWxlVmVyc2lvbiI6IjE3NDI0NjA3ODIxMTc5NjQ2MzYifQ==',
    // mainUrl:  "https://vod-license-m.volccdn.com/vod-license/l-1577806338-ch-vod-a-726847.lic?lk3s=0d9f7a7d&x-expires=4896055999&x-signature=h1%2BG94zLJdwbuHj4PKTGxPz9GzQ%3D",
  },
});
VePlayer.prepare({
  appId: 597335, // 从视频点播控制台-点播SDK-应用管理 获取
  strategies: {
    preload: true,
    adaptRange: true,
  },
  // 使用任意类型绕过类型检查，确保功能一致
  // @ts-ignore 类型定义与实际接受的参数不一致
  httpRetry: {
    maxCount: 3, // 最大重试次数
    intervalMs: 1000, // 重试间隔
    baseIntervalMs: 1000, // 基础重试间隔
  },
  // @ts-ignore 类型定义与实际接受的参数不一致
  fallback: {
    fromAlternate: true, // 尝试使用备用地址播放
    fromMSEToNative: true, // 从MSE降级到原生播放
  },
});

// 使用插件
app.use(createPinia());
app.use(NavBar);
app.use(router);

// 挂载应用
app.mount('#app'); 