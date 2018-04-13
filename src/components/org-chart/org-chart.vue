<template>
  <div class="org-chart" :class="{horizontal}">
    <org-chart-node
      :data="data"
      :props="props"
      :horizontal="horizontal"
      :label-width="labelWidth"
      :render-content="renderContent"
      @on-expand="$emit('on-expand', $event)"
      @on-node-click="$emit('on-node-click', $event)"
    ></org-chart-node>
  </div>
</template>

<script>
  import render from './node'

  export default {
    name: 'OrgChart',
    components: {
      OrgChartNode: {
        render,
        functional: true
      }
    },
    props: {
      data: {
        type: Object,
        required: true
      },
      props: {
        type: Object,
        default: () => ({
          label: 'label',
          expand: 'expand',
          children: 'children'
        })
      },
      horizontal: Boolean,
      labelWidth: [String, Number],
      renderContent: Function
    }
  }
</script>

<style>
@import '../../styles/org-chart.css';
</style>
