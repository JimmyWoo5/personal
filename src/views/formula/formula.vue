<template>
  <div >
    <div class="wrapper">
      <div class="el-textarea">
        <div class='el-textarea__inner' style='min-height: 100px;'>
          <i style='display: inline-block;' v-for='(i, n) in f' :key='n'>{{i.type===1 ? '【'+ i.value + '】' : i.value}}</i>
        </div>
      </div>
      <div class="params">
        <el-button v-for='(i, n) in params' :key='n' @click='onParamClick(i)'>{{i.value}}</el-button>
      </div>
      <el-row>
        <el-col :span='12'>
          <el-button v-for='(i, n) in numbers' :key='n' @click='onNumberClick(i)'>{{i.value}}</el-button>
        </el-col>
        <el-col :span='8' :offset='2'>
          <el-button v-for='(i, n) in symbols' :key='n' @click='onSymbolClick(i)'>{{i.value}}</el-button>
          <el-button @click='onLastStepClick'>←</el-button>
        </el-col>
      </el-row>
      <el-button type='text' class='clearAll' @click='f=[]'>清空</el-button>
    </div>
  </div>
</template>

<script>
  var limit = ['+', '-', '*', '/', '('] // 参数类型连接时 限制项
  export default {
    data () {
      return {
        f: [],
        params: [
          {type: 1, value: '工龄'},
          {type: 1, value: '司龄'},
          {type: 1, value: '出勤天数'},
          {type: 1, value: '迟到次数'},
          {type: 1, value: '基本工资'},
          {type: 1, value: '停车费'},
          {type: 1, value: '研发奖金'},
          {type: 1, value: '加班时长'}
        ],
        numbers: [
          {type: 0, value: '1'},
          {type: 0, value: '2'},
          {type: 0, value: '3'},
          {type: 0, value: '4'},
          {type: 0, value: '5'},
          {type: 0, value: '6'},
          {type: 0, value: '7'},
          {type: 0, value: '8'},
          {type: 0, value: '9'},
          {type: 0, value: '0'}
        ],
        symbols: [
          {type: 2, value: '+'},
          {type: 2, value: '-'},
          {type: 2, value: '*'},
          {type: 2, value: '/'},
          {type: 2, value: '.'},
          {type: 2, value: '('},
          {type: 2, value: ')'}
        ]
      }
    },
    computed: {
      lastI () {
        return this.f[this.f.length - 1]  // 上一个元素
      }
    },
    methods: {
      onLastStepClick () {
        var i = this.f.pop()
        if (i.value === '.') {
          this.alreadyDecimal = false
        }
      },
      onParamClick (i) {
        if (this.lastI) {
          if (limit.indexOf(this.lastI.value) === -1) { // 上个元素不是符号类型，return
            return
          }
        }

        this.f.push(i)
      },
      onNumberClick (i) {
        if (this.lastI) {
          if (this.lastI.type === 1 || this.lastI.value === ')') {
            return
          }
        }

        this.f.push(i)
      },
      // type > 0数字  1参数  2符号
      onSymbolClick (i) {
        if (!this.lastI) { // 无值时
          if (i.value !== '(') {
            return
          }
        }

        if (this.lastI) { // 有值时
          if (i.value === '.') { // 点 的限制
            if (this.alreadyDecimal) { // 如果已经是小数点模式
              return
            }
            if (this.lastI.type !== 0) { // 上个元素不为数字时 禁用
              return
            }
            this.alreadyDecimal = true // 通过后，设为小数点模式
          } else {
            this.alreadyDecimal = false // 不是小数点时取消小数点模式
          }

          if (i.value === '(' && limit.indexOf(this.lastI.value) === -1) { // 括号的限制
            return
          }

          if (i.value === ')' && this.lastI.type !== 0 && this.lastI.type !== 1 && this.lastI.value !== ')') {
            return
          }

          if (['+', '-', '*', '/'].indexOf(i.value) !== -1 && this.lastI.type !== 0 && this.lastI.type !== 1 && this.lastI.value !== ')') {
            return
          }
        }

        this.f.push(i)
      },
      solve ({data = []}) {
        console.log(data)
      }
    },
    mounted () {
      var data = {
        t: 242234
      }
      this.solve(data)
    }
  }
</script>

<style lang="less">
  .wrapper {
    width:700px;margin:0 auto;position: relative;
    .params{padding: 20px 0;}
    .clearAll{position: absolute;right: -34px;top: 0;}
  }
</style>
