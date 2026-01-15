/**
 * Copyright 2024 (c) Beijing Volcano Engine Technology Co., Ltd.
 * SPDX-License-Identifier: MIT
 */

import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import { featRoutes } from './page.tsx';
import VePlayer from '@/player';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  ...featRoutes,
]);

function App() {
  useEffect(() => {
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
      appId: 597335, // 从视频点播控制台-点播SDK-应用管理 获取，如果没有应用则创建
      strategies: {
        preload: true,
        adaptRange: true,
      },
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
