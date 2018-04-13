<template>
  <div v-loading='loading' element-loading-text="拼命加载中">
    <el-button class='btn' @click='request'>刷新</el-button>
    <el-button @click='add'>添加</el-button>
    <el-button @click='test'>测试</el-button>
    <el-button v-test="fdgsdfsdf">hjk</el-button>
    <el-button @click='getNotices'>actions</el-button>
    <el-button @click='showMsg'>获取</el-button>
    <span ref='sp'>都是发生的</span>
    <div class="content">
      <ul>
      	<li v-for='(item, index) in data' :key='index'>{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
  import mx from '@/mixin'
  import {mapActions, mapState} from 'vuex'
  import axios from 'axios'
  import qs from 'qs'
  export default {
    mixins: [mx],
    props: ['value'],
    data () {
      return {
        loading: false,
        data: []
      }
    },
    computed: {
      boys () {
        return this.$store.getters.getBoy
      },
      ...mapState({
        vuexInfo: state => state.notices
      })
    },
    methods: {
      ...mapActions(['tsta', 'getNotices']),
      handleIconClick (ev) {
        console.log(ev)
      },
      request () {
        this.loading = true
        this.$ajax({
          url: '/notice/notice/list',
          params: {
            page_num: 1,
            page_size: 10
          },
          done: (data = {}) => {
            console.log(data)
            this.data = data.data.items || []
          },
          fail: (data) => {
            console.log('fail')
          },
          always: () => {
            this.loading = false
          }
        })
      },
      add () {
        this.loading = true
        this.$ajax({
          url: '/notice/notice/add',
          method: 'post',
          data: {
            content: '<p>都是反倒是反倒是都是都是</p>',
            notice_files: [],
            org_ids: [],
            staff_ids: ['bfcac1a30226414cb9e6e340b4f19860'],
            status: 1,
            title: '都是反倒是都是收到都是',
            type_id: 57
          },
          done: () => {
            this.request()
          },
          always: () => {
            this.loading = false
          }
        })
      },
      test () {
        axios({
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
          },
          url: 'http://testopen.iancar.cn/srkph5/product/productDetail',
          method: 'post',
          transformRequest: [(data) => {
            return qs.stringify(data)
          }],
          data: {
            productId: 7,
            userId: 121312,
            originCode: 'WeDoctor'
          }
        })
      },
      showMsg () {
        alert(this.vuexInfo)
      }
    },
    mounted () {
      this.msg()
    }
  }
</script>
<style type="text/css" lang='less'>

  .content{height: 500px;border:1px solid;}

</style>
