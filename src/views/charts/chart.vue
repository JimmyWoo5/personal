<template>
  <div>
    <el-button @click='intvl'>重复</el-button>
    <el-button @click='stop'>Stop</el-button>
    <el-button @click='request'>单次</el-button>
    <div id="main" style="height:400px;"></div>
  </div>
</template>

<script>
  import axios from 'axios'
  var option = {
    title: {text: '都是反倒是'},
//  toolbox: {
//    feature: {
//      dataView: {},
//      saveAsImage: {
//        pixelRatio: 2
//      },
//      restore: {}
//    }
//  },
    legend: {
//    orient: 'vertical',
//    left: 'left',
      data: ['汽车销量']
    },
    xAxis: {
      data: ['马自达', '丰田', '本田', '奔驰']
    },
    yAxis: {},
    series: [{
      name: '汽车销量',
      type: 'bar',
      data: [112, 234, 534, 634],
      itemStyle: {
        normal: {
          color: (data) => {
            return ['#ff0000', '#B5C334', '#FCCE10', '#E87C25'][data.dataIndex]
          }
        }
      }
    }]
  }

  // 使用刚指定的配置项和数据显示图表。

  export default {
    data () {
      return {
        repeat: null
      }
    },
    methods: {
      stop () {
        clearInterval(this.repeat)
      },
      request () {
        axios({
          url: 'https://bj.lianjia.com/api/newhouserecommend?type=1&query=https%3A%2F%2Fbj.lianjia.com%2Fershoufang%2',
          method: 'get'
        })
      },
      intvl () {
        this.repeat = setInterval(() => {
          this.request()
        }, 1)
      }
    },
    mounted () {
      var charts = this.$echarts.init(document.getElementById('main'))
      charts.setOption(option)
      charts.on('click', (data) => {
        console.log(data)
      })
    }
  }
</script>

<style>
</style>
