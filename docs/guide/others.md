# 其他

## 请求发送
统计和诊断代码时，我们通常尝试在卸载（unload）文档之前向 Web 服务器发送数据。过早的发送数据可能导致错过收集数据的机会。然而，对于开发者来说保证在文档卸载期间发送数据一直是一个困难。因为用户代理通常会忽略在 unload 事件处理器中产生的异步 XMLHttpRequest。

《JavaScript高级程序设计（第四版）》中给出了使用 Image 图像资源发送请求的方法：

<img :src="$withBase('/images/js-book.png')" alt="JavaScript高级程序设计">

**其原理是借用图片加载不存在跨域问题的特点，用链接参数将数据传出去。**

但我们查阅了 MDN 的相关文档，发现此方法会迫使用户代理延迟卸载文档，并使得下一个导航出现的更晚。下一个页面对于这种较差的载入表现无能为力。

因此我们使用MDN推荐的 sendBeacon() 方法，该方法会使用户代理在有机会时异步地向服务器发送数据，同时不会延迟页面的卸载或影响下一导航的载入性能，这意味着：

- 数据发送是可靠的。
- 数据异步传输。
- 不影响下一导航的载入。

## 性能分析
1. FP：(First Paint / 首次绘制)
2. FCP：(First Contentful Paint / 首次有内容渲染) 在性能统计指标中，从用户开始访问 Web 页面的时间点到 FCP 的时间点这段时间可以被视为无内容时间，一般 FCP >= FP。
3. FMP：(First Meaningful Paint / 首次有意义绘制)
4. LCP： (Largest Contentful Paint / 最大内容绘制) 用于记录视窗内最大的元素绘制的时间，该时间会随着页面渲染变化而变化，因为页面中的最大元素在渲染过程中可能会发生改变，另外该指标会在用户第一次交互后停止记录。
<img :src="$withBase('/images/lcp.png')" alt="LCP">
1. DOM Ready：DOM准备时间domContentLoadedEventStart - fetchStart
2. DNS：dns解析时间domainLookupEnd - domainLookupStart
3. TTI：可交互时间domInteractive - domLoading

## Canvas 指纹追踪技术
1. 构造离屏 Canvas 对象，二维渲染上下文
2. 构造有大、小写字母和标点符号的测试文本 "Inspire Creativity, Enrich Life"
3. 基础文本框设置
4. 混色，加大不同用户之间的渲染差异（效果如下图）

<img :src="$withBase('/images/canvas.PNG')" alt="LCP">

5. 导出 Base64 编码的图像数据（缺点：字符串太长了）
6. 通过 SHA-256 算法得出唯一的 Canvas 指纹（重复概率极低，且长度适中，适合做 UUID） 
