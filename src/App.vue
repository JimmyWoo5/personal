<template>
  <div id="app">
    <div id="top"></div>
    <div id="con">
      <el-menu :router='true' default-active="1" id="side-menu" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
        <el-button style='margin-left:25px' type='text' :icon="isCollapse?'el-icon-arrow-right':'el-icon-arrow-left'" @click='isCollapse=!isCollapse'></el-button>
        <el-menu-item index="/home">
          <i class="el-icon-search"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="/org">
          <i class="el-icon-menu"></i>
          <span slot="title">组织</span>
        </el-menu-item>
        <el-menu-item index="/sal">
          <i class="el-icon-setting"></i>
          <span slot="title">工资</span>
        </el-menu-item>
        <el-menu-item index="/charts">
          <i class="el-icon-picture"></i>
          <span slot="title">图表</span>
        </el-menu-item>
        <el-menu-item index="/map">
          <i class="iconfont icon-ditu"></i>
          <span slot="title">地图</span>
        </el-menu-item>
        <el-menu-item index="/buy">
          <i class="iconfont icon-ditu"></i>
          <span slot="title">购买</span>
        </el-menu-item>
        <el-menu-item index="/formula">
          <i class="el-icon-plus"></i>
          <span slot="title">公式</span>
        </el-menu-item>
      </el-menu>

      <router-view id='view' :style="'margin-left:'+(isCollapse?'84px':'125px')"></router-view>

    </div>

  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="less">
  @import "less/reset";
  body{margin:0}
  #top{height: 40px;line-height: 40px;background: #000;position: fixed;top:0;width: 100%;}
  #con{
    margin-top: 40px;overflow: hidden;
    #side-menu{
     max-width:130px;float: left;
    }
    #view{
      padding:20px;margin-top: 20px;transition: all 500ms;box-shadow: 0 0 5px 5px #fafafa;
    }
  }

</style>