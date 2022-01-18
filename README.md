# [IDE Tech](https://www.zhihu.com/column/c_1463537113430441984)
此项目是系列文章「[IDE 中的魔法](https://www.zhihu.com/column/c_1463537113430441984)」中所涉及的代码实现。

##### [autocompletion](https://github.com/lzh-personal/IDETech/tree/master/autocompletion)
基于 Excel 公式语法，使用 ANTLR 生成 parser，实现了基础的自动补全能力。不包括真实语言的自动补全所涉及的作用域、类型系统、错误处理等逻辑，项目精力集中于自动补全是如何实现的这唯一目标中。