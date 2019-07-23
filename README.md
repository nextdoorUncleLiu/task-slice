## 任务切片

这是一个用来性能优化的工具，如果项目中存在 `long task` 的任务，可以采用此工具来做性能优化

### 核心思想

用户在感知每秒 60 帧（也就是 16.7 毫秒）时候，动画是平滑过渡的

在如果出现少于 60 帧动画的时候，就会感觉到卡顿，影响卡顿的原因有一部分就是因为 `long task` 导致的

这个工具的目的，就是用来解决长任务

### 安装

```javascript
npm install task-slice
```

### 使用方式

```javascript
import TaskSlice from 'TaskSlice'

TaskSlice.init(number, function(i){
    //i 执行到第几次，或者第几个切片任务
})
```

### 亲测数据对比

左侧的是优化前，右侧的是优化后

![](https://github.com/nextdoorUncleLiu/task-slice/blob/master/img/dataOne.png)
![](https://github.com/nextdoorUncleLiu/task-slice/blob/master/img/dataTwo.png)

### 版本更新记录

<table>
    <tr>
        <th>版本</th>
        <th>时间</th>
        <th>详情</th>
    </tr>
    <tr>
        <td>v1.0.2</td>
        <td>2019-7-23</td>
        <td>去除对数组的支持，仅支持数字方式，原来通过 callback 获取的数组项可通过 callback 返回的索引去直接获取，减少代码不是刚需的兼容，提升工具库执行效率</td>
    </tr>
    <tr>
        <td>v1.0.1</td>
        <td>2019-7-20</td>
        <td>格式化README</td>
    </tr>
    <tr>
        <td>v1.0.0</td>
        <td>2019-7-20</td>
        <td>正式版上线</td>
    </tr>
</table>
