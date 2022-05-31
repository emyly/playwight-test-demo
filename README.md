## playwight-test-demo

### Demo 测试场景描述

在百度搜索 playwright，根据返回的搜索内容判断第一条内容是否符合我们的搜索结果。

### 前提条件

- 运行环境：node 环境 （优先安装好 node）
- 测试框架：Playwright-test
- 语法：TypeScript
- 测试工具：Playwright
- 测试工具依赖的特定测试浏览器（任意一个）：谷歌，Safari，Opera，Edge，火狐等任选其一

`注意:playwright不支持babel编译，所以要结合ts，具体看个人需求，如不使用ECMAScript相关语法无需配置`

### Playwright 推荐适配的第三方测试框架

- Playwright Test

因为 Playwright Test 是微软推出的匹配 playwright 测试工具的测试框架，匹配度和功能度上都更完整更好用，所以我们选择了 Playwright Test 测试框架。

### 启动命令

```js
npm run test  //若需要获取运行的详细日志可在运行前加DEBUG=pw:api
```
