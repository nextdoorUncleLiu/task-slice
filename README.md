## 时间切片

这是一个用来性能优化的工具，如果项目中存在 `long task` 的任务，可以采用此工具来做性能优化

### 核心思想

用户在感知每秒 60 帧（也就是 16.7 毫秒）时候，动画是平滑过渡的

在如果出现少于 60 帧动画的时候，就会感觉到卡顿，影响卡顿的原因有一部分就是因为 `long task` 导致的

这个工具的目的，就是用来解决长任务

### 安装

```javascript
npm install time-slice
```

### 使用方式

```javascript
import TimeSlice from 'TimeSlice'

TimeSlice.init(number || array, function(i){
    //i 执行到第几次，或者第几个切片任务
})
```

### 亲测数据对比

左侧的是优化前，右侧的是优化后

![](https://github.com/nextdoorUncleLiu/time-slice/blob/master/img/dataOne.png)
![](https://github.com/nextdoorUncleLiu/time-slice/blob/master/img/dataTwo.png)