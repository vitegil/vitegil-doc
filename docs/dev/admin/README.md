# 介绍

> 本项目基于Vue3-Admin-Element构建的后台管理系统。

## 数据可视化

### 页面访问数据

<img :src="$withBase('/images/total.png')" alt="访问数据">

### 页面异常信息展示

<img :src="$withBase('/images/error-t.png')" alt="错误总览">

### 监视不同时间段页面异常数量

<img :src="$withBase('/images/error-js.png')" alt="js错误">

### 页面性能监控

<img :src="$withBase('/images/perf-t.png')" alt="性能">

### 页面加载时间

<img :src="$withBase('/images/perf-load.png')" alt="时间">

## 持续部署

在项目开发阶段，我们需要频繁重复下面的操作：修改代码、提交代码、打包、登录服务器、上传打包文件、重启服务。。。这个时候，自动化部署就派上用场了。我们基于`Github Actions`进行CI/CD，`Netlify`进行页面部署，在每次更新GitHub仓库的master分支时，Github Actions会帮我们检查代码规范，进行代码合并，Netlify就会触发一系列的事件，帮助我们打包项目和自动部署。这样能够减少不必要的开发工作，将更过精力投入生产中，提高开发效率。

