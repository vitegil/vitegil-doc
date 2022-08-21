# 快速上手

[![npm](https://img.shields.io/npm/v/vitegil-sdk?color=3c8cff)](https://www.npmjs.com/package/vitegil-sdk)
[![node compatibility](https://img.shields.io/node/v/vitegil-sdk?color=0F9D58)](https://nodejs.org/en/about/releases/)
[![build status](https://github.com/vitegil/vitegil-sdk/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/vitegil/vitegil-sdk/actions/workflows/ci.yml)

> **前提条件**
>
> 本项目采用pnpm进行管理，需要您预先安装pnpm。
> 您可以通过 `npm i -g pnpm` 安装pnpm。

## 安装

```bash
pnpm i vitegil-sdk
```

## 引入项目

> 以 Vue.js 项目为例，在 App.vue 中，你可以使用如下代码引入 Vitegil SDK：

```javascript
import Tracker from 'vitegil-sdk'
// ...
mounted () {
  // ...
  new Tracker({
    requestUrl: `${YOUR_REQUEST_URL}`,
    historyTracker: true,
    domTracker: true,
    jsError: true,
    lazyReport: true,
    timeTracker: true,
    deviceTracker: true,
  })
}
```