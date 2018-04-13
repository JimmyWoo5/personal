<template>
  <div>
    <el-input v-model='inputValue' placeholder='输入....'></el-input>
  </div>
</template>

<script>
  export default {
    props: ['value'],
    data () {
      return {
        inputValue: ''
      }
    },
    watch: {
      value: {
        handler (val) {
          console.log('sdf')
          this.inputValue = val
        },
        immediate: true
      },
      inputValue (val) {
        this.$emit('input', val)
      }
    }
  }
</script>

<style>
</style>