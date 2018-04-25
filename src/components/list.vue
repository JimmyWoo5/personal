<template>
  <ul>
  	<li v-for='(i,n) in data' :key='n'>
  	  {{i.name}}
  	  <slot :item='i' :index='n'></slot>
  	</li>
  </ul>
</template>

<script>
  export default {
    data () {
      return {
        data: [
          {id: 12, name: '第三方'},
          {id: 12, name: '管饭'},
          {id: 12, name: '沪电股份'},
          {id: 12, name: '鬼地方个地方'},
          {id: 12, name: '发的'}
        ]
      }
    }
  }
</script>

<style>
</style>