<template>
  <div>
    <i class="iconfont icon-naozhong"></i>
    <comp v-model='text'></comp>
    <p>{{text}}</p>
    <router-link to='/home/detail/23'>详情</router-link>
    <el-button @click='$router.push("/home/detail/23")'>详情</el-button>

    <render></render>
    <div v-for='(i,n) in arr'>{{i}}</div>
    <el-button @click='change'>change</el-button>
    <el-table
      border
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
  import comp from '@/components/input'
  import render from '@/components/render'
  export default {
    components: {
      comp, render
    },
    data () {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        arr: ['one', 'two', 'three', 'four'],
        content: '',
        text: '第三方',
        data: [{
          name: '一级1',
          leader: 'jeck',
          children: [{
            name: '二级-1',
            leader: 'jeck',
            children: [{
              name: '三级-1',
              leader: 'jeck'
            }, {
              name: '三级2',
              leader: 'jeck'
            }]
          }, {
            name: '二级2',
            leader: 'jeck'
          }]
        }, {
          name: '一级2',
          leader: 'jeck'
        }]
      }
    },
    methods: {
      onClick () {
        console.log('sdfds')
      },
      change () {
        // this.$set(this.arr, 1, 'changed')
        this.$nextTick(() => {
          console.log('do')
        })
        // this.tableData = []
      }
    },
    mounted () {
      // this.$store.dispatch('tst')
      var arr = [21, 21, 31, 16, 20]
      var check = (num) => {
        return num > 20
      }
      console.log(arr.every(check))
    }
  }
</script>

<style lang="less" scoped>
  .row{background: #f00;}
</style>
