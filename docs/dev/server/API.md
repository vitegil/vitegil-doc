---
title: 前端监控系统 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.15"

---

# 前端监控系统

> v1.0.0

# SDK 接口

## POST SDK 测试接口

POST /api/test

编写 SDK 时可以将数据发送到该接口，响应内容为发送内容

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 测试接口

GET /api/test

测试使用

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 后台管理系统接口

## GET 用户浏览行为

GET /api/operation

获取网站的 pv/uv，返回后台

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 后端本地测试

## POST 接收 SDK 发过来的 Performance 信息

POST /api/performance/savePerformance

> Body 请求参数

```json
{
  "event": "string",
  "targetKey": "string",
  "appId": "string",
  "url": "string",
  "connectTime": 0,
  "ttfbTime": 0,
  "responseTime": 0,
  "parseDOMTime": 0,
  "domContentLoadedTime": 0,
  "domContentLoaded": 0,
  "loadTime": 0,
  "parseDNSTime": 0,
  "domReadyTime": 0,
  "firstPaint": 0,
  "timeToInteractive": 0,
  "firstContentfulPaint": 0,
  "firstMeaningfulPaint": 0,
  "largestContentfulPaint": 0,
  "userId": "string",
  "time": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» event|body|string| 是 |none|
|» targetKey|body|string| 是 |none|
|» appId|body|string| 是 |none|
|» url|body|string| 是 |none|
|» connectTime|body|integer| 是 |none|
|» ttfbTime|body|integer| 是 |none|
|» responseTime|body|integer| 是 |none|
|» parseDOMTime|body|integer| 是 |none|
|» domContentLoadedTime|body|integer| 是 |none|
|» domContentLoaded|body|integer| 是 |none|
|» loadTime|body|integer| 是 |none|
|» parseDNSTime|body|integer| 是 |none|
|» domReadyTime|body|integer| 是 |none|
|» firstPaint|body|integer| 是 |none|
|» timeToInteractive|body|integer| 是 |none|
|» firstContentfulPaint|body|integer| 是 |none|
|» firstMeaningfulPaint|body|integer| 是 |none|
|» largestContentfulPaint|body|integer| 是 |none|
|» userId|body|string| 是 |none|
|» time|body|integer| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 接受 SDK 发过来的 Error 信息

POST /api/error/saveError

> Body 请求参数

```json
{
  "event": "string",
  "targetKey": "string",
  "userId": "string",
  "time": 0,
  "appId": "string",
  "errorCol": 0,
  "errorRow": 0,
  "errorInfo": "string",
  "errorExtra": "string",
  "errorUrl": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» event|body|string| 是 |none|
|» targetKey|body|string| 是 |none|
|» userId|body|string| 是 |none|
|» time|body|integer| 是 |none|
|» appId|body|string| 是 |none|
|» errorCol|body|integer| 是 |none|
|» errorRow|body|integer| 是 |none|
|» errorInfo|body|string| 是 |none|
|» errorExtra|body|string| 是 |none|
|» errorUrl|body|string| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 接收 SDK 发过来的 Device 信息

POST /api/device/saveDevice

> Body 请求参数

```json
{
  "appId": "string",
  "deviceType": "string",
  "OS": "string",
  "OSVersion": "string",
  "screenHeight": 0,
  "screenWidth": 0,
  "language": "string",
  "network": "string",
  "orientation": "string",
  "browser": "string",
  "browserInfo": "string",
  "userId": "string",
  "timeStamp": 0
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» appId|body|string| 是 |none|
|» deviceType|body|string| 是 |none|
|» OS|body|string| 是 |none|
|» OSVersion|body|string| 是 |none|
|» screenHeight|body|integer| 是 |none|
|» screenWidth|body|integer| 是 |none|
|» language|body|string| 是 |none|
|» network|body|string| 是 |none|
|» orientation|body|string| 是 |none|
|» browser|body|string| 是 |none|
|» browserInfo|body|string| 是 |none|
|» userId|body|string| 是 |none|
|» timeStamp|body|integer| 是 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 接受 SDK 发过来的 PV 信息

POST /api/pv/savePVs

> Body 请求参数

```json
[
  {
    "event": "string",
    "targetKey": "string",
    "userId": "string",
    "time": 0,
    "appId": "string"
  }
]
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|array[object]| 否 |none|

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 测试接口

## GET test

GET /test

> 返回示例

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» msg|string|true|none||none|

# 数据模型

<h2 id="tocS_uv">uv</h2>

<a id="schemauv"></a>
<a id="schema_uv"></a>
<a id="tocSuv"></a>
<a id="tocsuv"></a>

```json
{
  "event": "string",
  "targetKey": "string",
  "data": "string"
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|event|string|true|none||none|
|targetKey|string|true|none||none|
|data|string|true|none||none|

<h2 id="tocS_device">device</h2>

<a id="schemadevice"></a>
<a id="schema_device"></a>
<a id="tocSdevice"></a>
<a id="tocsdevice"></a>

```json
{
  "event": "string",
  "targetKey": "string",
  "data": {
    "deviceType": "string",
    "OS": "string",
    "OSVersion": "string",
    "screenHeight": 0,
    "screenWidth": 0,
    "language": "string",
    "netWork": "string",
    "orientation": "string",
    "browser": "string",
    "browserInfo": "string"
  }
}

```

### 属性

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|event|string|true|none||none|
|targetKey|string|true|none||none|
|data|object|true|none||none|
|» deviceType|string|true|none||none|
|» OS|string|true|none||none|
|» OSVersion|string|true|none||none|
|» screenHeight|integer|true|none||none|
|» screenWidth|integer|true|none||none|
|» language|string|true|none||none|
|» netWork|string|true|none||none|
|» orientation|string|true|none||none|
|» browser|string|true|none||none|
|» browserInfo|string|true|none||none|

