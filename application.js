Vue.use(VueMaterial)


Vue.material.theme.register('default', {
  primary: 'orange',
  accent: 'black'
})


var firstTest = new Vue({
  el: '#firstTest',
  data: {
    show: true
  }
})


var secondTest = new Vue({
  el: '#secondTest',
  data: {
    show: true
  }
})


var thirdTest = new Vue({
  el: '#thirdTest',
  data: {
    show: true
  }
})
