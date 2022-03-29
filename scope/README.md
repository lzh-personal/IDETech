# [IDE Tech](https://www.zhihu.com/column/c_1463537113430441984)
### 说明
此项目实现了基础的 typescript 作用域相关的解析功能，可以通过 AST 构造对应的作用域树，仅仅包含变量相关的解析。

##### 初始化
```bash
# 执行项目
yarn start
```
start 执行的代码可以在 `index.ts` 中查看。

##### 测试
```bash
yarn test
```
测试用例位于 `tests/cases` 中，检查注释位置所指明的变量属性是否符合规则。