import OrgChart from './org-chart'

const install = (Vue) => {
  if (install.installed) return true

  install.installed = true

  Vue.component(OrgChart.name, OrgChart)
}

OrgChart.install = install

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(OrgChart)
}

export default OrgChart
