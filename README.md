# 腾讯天气

跳转连接[GithubPage](https://sunsunmonkey.github.io/)

## 实现功能

基础实时查询
时段查询，并且分割了日出和日落
用EchartJs实现了图表7天最高温和最低温
查询根据关键词查询或推荐查询
简单实现了历史记录（时间有点紧没写删除等的细节）

## 使用的技术

这次项目我尝试的用了一次web Component 用原生的方式实现了组件化开发。web Component的封装基于影子树十分强大，有着完全隔离的环境。
但由于时间较赶我将template标签写在了一起，或许该用iframe标签导入。
该技术有着很大的潜力，但其性能和状态管理可能是值得思考的，未来说不定基于web Component 的库或框架兴起也能撼动现在react和vue的地位，值得思考与研究。

## 亮点

#### 1.项目分层结构

1.service （网络请求）
2.compoment（组件）
3.util （公用资源）
结构较为清晰，一定程度降低了代码耦合度

#### 2.样式功能较为还原

#### 3.还原图表

图表样式调起来好费劲啊😭

#### 4.加入了搜索不到的提示

我看原版腾讯天气没做这个，但我感觉体验不好，所以加上了

#### 5.部署到了Github Page

可以给我加个follow或star（狗头）

## 不足和总结

防抖和节流还没来的及做
有些状态管理写的并不是很优雅
还有一些小的细节缺失
以及可能我没注意的Bug
