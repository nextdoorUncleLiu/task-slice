# demo

这是 task-slice 的演示 demo

## 安装

```
npm install
```

## 启动

```
yarn serve
```

在里面我罗列了我们前之前的数据更新方式，和使用 task-slice 的数据更新方式

```javascript
// before
var arr = [0,1,2,3,4,5,6,7,8,9] //模仿接口请求返回的数据
this.arr = arr

// after
TaskSlice.init({
    sliceList: 10,
    callback: i => {
        this.arr.push(i)
    }
})
```
