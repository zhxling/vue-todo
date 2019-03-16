import Vue from 'vue'

const app = new Vue({
  template: '<div>this is content {{text}}</div>',
  data: {
    text: 0
  }
})

app.$mount('#root')

setInterval(() => {

}, 1000)

console.log(app.$data)
