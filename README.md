## 一、项目描述

- 一个基于 vue、datav、Echart 框架的 " **数据大屏项目** "，
- 项目需要全屏展示（按 F11）。
- 项目环境：vue-cli-3.0、webpack-4.0、npm-6.13、node-v12.16。



项目展示
![项目展示](https://images.gitee.com/uploads/images/2020/0411/221307_0f8af2e7_4964818.gif '20200411_221020.gif')

## 二、主要文件介绍

| 文件                | 作用/功能                                           |
| ------------------- | --------------------------------------------------- |
| main.js             | 主目录文件，引入Echart/DataV等文件                   |
| utils               | 工具函数与 mixins 函数等                            |
| views/ index.vue    | 项目主结构                                          |
| views/其余文件      | 界面各个区域组件（按照位置来命名）ajax 接口请求位置 |
| assets              | 静态资源目录，放置 logo 与背景图片                  |
| assets / style.scss | 通用 CSS 文件，全局项目快捷样式调节                 |
| assets / index.scss | Index 界面的 CSS 文件                               |
| components/echart   | 所有 echart 图表（按照位置来命名）                  |
| common/flexible.js  | flexible 插件代码（适配屏幕尺寸，定制化修改）       |

## 三、使用介绍

### 请求数据

   现在的项目未使用前后端数据请求，建议使用 axios 进行数据请求，

- axios 的 main.js 配置参考范例（因人而异）


###  动态渲染图表

   在`components/echart`下的文件，比如`drawPie()`是渲染函数，`echartData`是需要动态渲染的数据，当外界通过`props`传入新数据，我们可以使用`watch()`方法去监听，一但数据变化就调用`this.drawPie()`并触发内部的`.setOption`函数，重新渲染一次图表。



###  复用图表组件

   因为 Echart 图表是根据`id/class`去获取 Dom 节点并进行渲染的，所以我们只要传入唯一的 id 值与需要的数据就可以进行复用。如中间部分的`任务通过率与任务达标率`组件就是采用复用的方式。

如：在调用处`views/center.vue`里去定义好数据并传入组件（项目里的所有`id`都不能重复!!!）


### 更换边框

   边框是使用了 DataV 自带的组件，
## 四、更新情况

1. 增加了 Echart 组件复用的功能，如：中间任务达标率的两个百分比图使用的是同一个组件。
2. 修复了头部右侧的图案条不对称的问题。
3. 修复屏幕适配问题，更换了所有的尺寸单位，统一使用 rem。
4. 使用 Mixins 注入图表响应式代码。
5. vue-awesome 改成按需引入的方式

## 五、其余

