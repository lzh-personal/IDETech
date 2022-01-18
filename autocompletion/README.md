# [IDE Tech](https://www.zhihu.com/column/c_1463537113430441984)
### 自动补全
此项目基于 Excel 公式语法，使用 ANTLR 生成 parser，实现了基础的自动补全能力。不包括真实语言的自动补全所涉及的作用域、类型系统、错误处理等逻辑，项目精力集中于自动补全是如何实现的这唯一目标中。
在运行此项目前，请确保已经安装完 ANTLR，安装 ANTLR 的教程可以参考[IDE中的魔法 - 语法分析器生成工具 ANTLR](https://zhuanlan.zhihu.com/p/453333109)。
##### 初始化
```bash
# 使用 ANTLR 构建
yarn build
# 执行项目
yarn start
```
start 执行的代码可以在 `index.ts` 中查看。

##### 测试
```bash
yarn test
```
测试用例位于 `tests/autocompletion.test.ts` 中，可以参考用例了解自动补全实现的用法。

##### 相关文章
[IDE中的魔法 - 语法分析器生成工具 ANTLR](https://zhuanlan.zhihu.com/p/453333109)
[IDE中的魔法 - 如何实现一个 parser](https://zhuanlan.zhihu.com/p/455614913)