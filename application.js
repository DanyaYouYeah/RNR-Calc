defCaption = "Введите кол-во ₽";
Vue.use(VueMaterial)


Vue.material.theme.register('default', {
  primary: 'orange',
  accent: 'black'
})


var firstTest = new Vue({
  el: '#firstTest',
  data: {
    questionNumber: '#',
    currentQuestion: '#',
    questionDiscription: "#",
    questionExample: '#',
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true
  }
})


var secondTest = new Vue({
  el: '#secondTest',
  data: {
    questionNumber: '#',
    currentQuestion: '#',
    questionDiscription: "#",
    questionExample: '#',
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true
  }
})


var thirdTest = new Vue({
  el: '#thirdTest',
  data: {
    questionNumber: '#',
    currentQuestion: '#',
    questionDiscription: "#",
    questionExample: '#',
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true
  }
})


var fourthTest = new Vue({
  el: '#fourthTest',
  data: {
    questionNumber: '#',
    currentQuestion: '#',
    questionDiscription: "#",
    questionExample: '#',
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true
  }
})


var getResults = new Vue({
  el: '#getResults',
})
