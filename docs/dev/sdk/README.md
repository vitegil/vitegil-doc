# 功能需求

## 背景

错误信息种类繁多，细分起来更是数不胜数。我们希望收集到的数据能够切中要点，并且有精确的划分。

网站可能希望通过一些用户的访问数据进行市场调研。

## 确定需求

1. 业务层
   1. UV/PV：页面访问量和访问人数
   2. 访问者信息：访问者的 IP、访问者的 UA、访问者的操作系统、访问者的浏览器、访问者的地区、访问者的语言、访问者地区、访问者的网络类型等
2. 网站性能
   1. 页面性能
   2. 页面响应时间
3. 错误监控
   1. JS 错误
   2. Promise 错误
   3. 资源加载错误
   4. 接口错误
   5. DOM 错误
4. 上报策略
   1. 定时上报
   2. 延迟上报
5. 使用策略：代码埋点


