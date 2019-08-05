<template>
  <div id="app">
    <div v-for="(item, index) in arr" :key="index">
      这里是{{index}}
    </div>
  </div>
</template>

<script>
import TaskSlice from './index.js'
export default {
  name: 'app',
  data () {
    return {
      arr:[]
    }
  },
  mounted () {
    // before
    // var arr = [0,1,2,3,4,5,6,7,8,9] //模仿接口请求返回的数据
    // this.arr = arr

    // after
    TaskSlice.init({
      sliceList: 10,
      callback: i => {
        this.arr.push(i)
      }
    })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
