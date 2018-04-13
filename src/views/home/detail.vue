<template>
  <div>
    detail msg
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    computed: {
      ...mapState({
        id: state => state.route.params.id
      })
    },
    mounted () {
      console.log(this.$route.params.id)
    }
  }
</script>

<style>
</style>
