import Vue from 'vue'

new Vue({
  el: '#root',
  template: '<div>{{text}}</div>',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate')
  },
  created () {
    console.log(this.$el, 'created')
  },
  beforeMount () {
    // 跟挂载的HTML有关，如果没有html挂载则不触发
    console.log(this.$el, 'beforeMount')
  },
  mounted () {
    // 跟挂载的HTML有关，如果没有html挂载则不触发
    console.log(this.$el, 'mounted')
  },
  beforeUpdate () {
    // reactive数据更新时触发
    console.log('beforeUpdate')
  },
  updated () {
    // reactive数据更新时触发
    console.log('updated')
  },
  activated () {
    // 跟 keep-alive组件有关
    console.log('activated')
  },
  deactivated () {
    // 跟 keep-alive组件有关
    console.log('deactivated')
  },
  beforeDestroy () {
    // 销毁组建时触发
    console.log('beforeDestroy')
  },
  destroyed () {
    // 销毁组建时触发
    console.log('destroyed')
  },
  render (h) {
    console.log('render function invoked')
    return h('div', {}, this.text)
  }
})
