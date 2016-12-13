

defCaption = "Введите кол-во ₽";
defCaption2 = "Введите кол-во"
Vue.use(VueMaterial)

var firstQuestionsArray = ['Оклад', 'Оплата за доставку', 'Бензин', 'Питание', 'Сотовая Связь'];
var firstQuestionsQuantity = firstQuestionsArray.length;
var firstQuestionNumbers = ["1", "2", "3", "4", "5"];
var firstQuestionDiscription = ['Сколько вы платите одному курьеру за смену. Если он получает раз в месяц то поделите на кол-во дней', 'Какую сумму вы даете курьеру за выполненый заказ, помимо или вместо оклада', 'Сколько денег в среднем вы даете на бензин. Посчитайте сумму в день', 'Какую сумму в день, вы тратите на одного курьера', 'Сколько вы даете денег курьеру на сотовую связь в день. Если вы даете на месяц, то разделите на кол-во рабочих дней'];
var firstQuestionExample = ['(Например: 30000 рублей / 30 дней = 1000 рублей за смену)', '', '(Например: 4000 рублей / 10 дней = 400 рублей в день. Или 3 рубля/км = 300 рублей)', '', '(Например: 500 рублей / 15 дней = 33.3 рубля / день)'];
var firstAnwsersArray = [];

var secondQuestionsArray = ['Объявления', 'Налоги', 'Термосумки', 'Обучение', 'Диспетчер', 'Мотивация', 'Обслуживание Авто'];
var secondQuestionsQuantity = secondQuestionsArray.length;
var secondQuestionNumbers = ["1", "2", "3", "4", "5", "6", "7"];
var secondQuestionDiscription = ['Сколько вы тратите денег в месяц на объявления, чтобы привлечь курьеров.', 'Сколько вы тратите на курьеров в квартал', 'Сколько стоят ваши термосумки и какое кол-во. Средняя жизнь данной сумки 1 год. Давайте посчитаем сколько вы тратите на них в день.', 'Сколько стоит час вашего сотрудника, который обучает курьеров? Он ведь мог потрпатить это время на что то другое. Давайте посчитаем.', 'Ввод в штат сотрудника, который контролирует работу курьера.', 'Премиальный фонд на сотрудника за выполнение плана', 'Если в вашей компании есть корпоративные машины, на которых вы осувстляете доставку, то это мы тоже нужно посчитать'];
var secondQuestionExample = ['(Например: 20000 рублей/месяц)', '(Например: 10000 рублей / 120 дней)', '(Например: 5 сумок по 3000 рублей / 365 дней = 41 рубль / день)', '(Например: 30000 рублей оклад. 8 часов рабочая смена. 22 смены. Следовательно 30000 рублей / 22 смены / 8 часов = 170 рублей/час. На обучение мы тратим 3 часа в неделю. 170 рублей * 3 часа * 4 недели =  2040 рублей/месяц. Чтобы посчитать сколько это в день делаем простой подсчет 2040 рублей / 30 дней = 68 рублей.)', '(Например: 30000 рублей / 30 дней = 1000 рублей/смена)', '(Например: 5000 рублей / 30 дней = 166 рублей / день)', '(Например: 4 машины * 40000 рублей / год = 160000 рублей / год. 160000 рублей / 365 дней = )'];
var secondAnwsersArray = [];

var thirdQuestionsArray = ['Не выполненые заказы', 'Простой курьера', 'Не выход на работу курьера'];
var thirdQuestionsQuantity = thirdQuestionsArray.length;
var thirdQuestionNumbers = ["1", "2", "3"];
var thirdQuestionDiscription = ['Нужно указать сумму, которую вы потеряли по причине того, что не смогли отвезти заказа из-за отсутствия курьера, или длительного ожидания заказа.', 'Если вы платите курьеру оклад или за выход, то он должен отрабатывать эти деньги. Тут нужно указать сумму которую вы тратите, на то что курьер просто сидит и ждет заказ. ', 'Бывает ли такое что ваш курьер по какой-то причине просто не пришел на работу. Сколько вы из-за этого теряете денег? '];
var thirdQuestionExample = ['(Например: 2 заказа в день по 1500 рублей = 3000 рублей / день.)', '(Например: 1000 рублей смена / 10 часов = 100)', '(Например: не выполнено 5 заказов по 1500 рублей = 7500 рублей/день.)'];
var thirdAnwsersArray = [];


var fourthQuestionsArray = ['Сколько в среднем курьеров в смену', 'Среднее кол-во заказов в день?'];
var fourthQuestionsQuantity = fourthQuestionsArray.length;
var fourthQuestionNumbers = ["1", "2"];
var fourthQuestionDiscription = ['', ''];
var fourthQuestionExample = ['', ''];
var fourthAnwsersArray = [];



Vue.material.theme.register('default', {
  primary: 'orange',
  accent: 'black'
})

var testCondition = {
    firstTestComplete : false,
    secondTestComplete: false,
    thirdTestComplete: false,
    fourthTestComplete: false
};



var firstTest = new Vue({
  el: '#firstTest',
  data: {
    questionNumbers: firstQuestionsQuantity,
    questionNumber: firstQuestionNumbers[0],
    currentQuestion: firstQuestionsArray[0],
    questionDiscription: firstQuestionDiscription[0],
    questionExample: firstQuestionExample[0],
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true,
    anwsersQuantity: 0,
    inputValue: '',
    state: testCondition
  },
  methods:{
     getNextData: function () {
       if (this.currentValue == this.questionNumbers - 1){
         testCondition.firstTestComplete = true;
       }
       if (this.currentValue < this.questionNumbers - 1){
         console.log(parseFloat(this.inputValue));
         firstAnwsersArray[this.currentValue] = this.inputValue;
         ++this.currentValue;
         if ((firstAnwsersArray[this.currentValue] != undefined)|| (firstAnwsersArray[this.currentValue] != 0)){
           this.inputValue = firstAnwsersArray[this.currentValue];
         }
         this.questionNumber = firstQuestionNumbers[this.currentValue];
         this.currentQuestion = firstQuestionsArray[this.currentValue];
         this.questionDiscription = firstQuestionDiscription[this.currentValue];
         this.questionExample = firstQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }

     },
     getPrevData: function (){
       if (this.currentValue != 0){
         firstAnwsersArray[this.currentValue] = this.inputValue;
         --this.currentValue;
         if ((firstAnwsersArray[this.currentValue] != 0 )|| (firstAnwsersArray[this.currentValue] != undefined)){
           this.inputValue = firstAnwsersArray[this.currentValue];
         }
         this.questionNumber = firstQuestionNumbers[this.currentValue];
         this.currentQuestion = firstQuestionsArray[this.currentValue];
         this.questionDiscription = firstQuestionDiscription[this.currentValue];
         this.questionExample = firstQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }
     },
     getAnwsersQuantity: function (){

     }

  }
})


var secondTest = new Vue({
  el: '#secondTest',
  data: {
    questionNumbers: secondQuestionsQuantity,
    questionNumber: secondQuestionNumbers[0],
    currentQuestion: secondQuestionsArray[0],
    questionDiscription: secondQuestionDiscription[0],
    questionExample: secondQuestionExample[0],
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true,
    anwsersQuantity: 0,
    inputValue: '',
    state: testCondition
  },
  methods:{
     getNextData: function () {
       if (this.currentValue == this.questionNumbers - 1){
         testCondition.secondTestComplete = true;
       }
       if (this.currentValue < this.questionNumbers - 1){
         secondAnwsersArray[this.currentValue] = this.inputValue;
         ++this.currentValue;
         if ((secondAnwsersArray[this.currentValue] != undefined)|| (secondAnwsersArray[this.currentValue] != 0)){
           this.inputValue = secondAnwsersArray[this.currentValue];
         }
         this.questionNumber = secondQuestionNumbers[this.currentValue];
         this.currentQuestion = secondQuestionsArray[this.currentValue];
         this.questionDiscription = secondQuestionDiscription[this.currentValue];
         this.questionExample = secondQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }

     },
     getPrevData: function (){
       if (this.currentValue != 0){
         secondAnwsersArray[this.currentValue] = this.inputValue;
         --this.currentValue;
         if ((secondAnwsersArray[this.currentValue] != 0 )|| (secondAnwsersArray[this.currentValue] != undefined)){
           this.inputValue = secondAnwsersArray[this.currentValue];
         }
         this.questionNumber = secondQuestionNumbers[this.currentValue];
         this.currentQuestion = secondQuestionsArray[this.currentValue];
         this.questionDiscription = secondQuestionDiscription[this.currentValue];
         this.questionExample = secondQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }
     },
     getAnwsersQuantity: function (){

     }

  }
})


var thirdTest = new Vue({
  el: '#thirdTest',
  data: {
    questionNumbers: thirdQuestionsQuantity,
    questionNumber: thirdQuestionNumbers[0],
    currentQuestion: thirdQuestionsArray[0],
    questionDiscription: thirdQuestionDiscription[0],
    questionExample: thirdQuestionExample[0],
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true,
    anwsersQuantity: 0,
    inputValue: '',
    state: testCondition
  },
  methods:{
     getNextData: function () {
       if (this.currentValue == this.questionNumbers - 1){
         testCondition.thirdTestComplete = true;
       }
       if (this.currentValue < this.questionNumbers - 1){
         thirdAnwsersArray[this.currentValue] = this.inputValue;
         ++this.currentValue;
         if ((thirdAnwsersArray[this.currentValue] != undefined)|| (thirdAnwsersArray[this.currentValue] != 0)){
           this.inputValue = thirdAnwsersArray[this.currentValue];
         }
         this.questionNumber = thirdQuestionNumbers[this.currentValue];
         this.currentQuestion = thirdQuestionsArray[this.currentValue];
         this.questionDiscription = thirdQuestionDiscription[this.currentValue];
         this.questionExample = thirdQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }

     },
     getPrevData: function (){
       if (this.currentValue != 0){
         thirdAnwsersArray[this.currentValue] = this.inputValue;
         --this.currentValue;
         if ((thirdAnwsersArray[this.currentValue] != 0 )|| (thirdAnwsersArray[this.currentValue] != undefined)){
           this.inputValue = thirdAnwsersArray[this.currentValue];
         }
         this.questionNumber = thirdQuestionNumbers[this.currentValue];
         this.currentQuestion = thirdQuestionsArray[this.currentValue];
         this.questionDiscription = thirdQuestionDiscription[this.currentValue];
         this.questionExample = thirdQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }
     },
     getAnwsersQuantity: function (){

     }

  }
})


var fourthTest = new Vue({
  el: '#fourthTest',
  data: {
    questionNumbers: fourthQuestionsQuantity,
    questionNumber: fourthQuestionNumbers[0],
    currentQuestion: fourthQuestionsArray[0],
    questionDiscription: fourthQuestionDiscription[0],
    questionExample: fourthQuestionExample[0],
    defaultCaption: defCaption2,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true,
    anwsersQuantity: 0,
    inputValue: '',
    state: testCondition
  },
  methods:{
     getNextData: function () {
       if (this.currentValue == this.questionNumbers - 1){
         testCondition.fourthTestComplete = true;
       }
       if (this.currentValue < this.questionNumbers - 1){
         fourthAnwsersArray[this.currentValue] = this.inputValue;
         ++this.currentValue;
         if ((fourthAnwsersArray[this.currentValue] != undefined)|| (fourthAnwsersArray[this.currentValue] != 0)){
           this.inputValue = fourthAnwsersArray[this.currentValue];
         }
         this.questionNumber = fourthQuestionNumbers[this.currentValue];
         this.currentQuestion = fourthQuestionsArray[this.currentValue];
         this.questionDiscription = fourthQuestionDiscription[this.currentValue];
         this.questionExample = fourthQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }

     },
     getPrevData: function (){
       if (this.currentValue != 0){
         fourthAnwsersArray[this.currentValue] = this.inputValue;
         --this.currentValue;
         if ((fourthAnwsersArray[this.currentValue] != 0 )|| (fourthAnwsersArray[this.currentValue] != undefined)){
           this.inputValue = fourthAnwsersArray[this.currentValue];
         }
         this.questionNumber = fourthQuestionNumbers[this.currentValue];
         this.currentQuestion = fourthQuestionsArray[this.currentValue];
         this.questionDiscription = fourthQuestionDiscription[this.currentValue];
         this.questionExample = fourthQuestionExample[this.currentValue];
         if ((this.questionDiscription == '') || (this.questionDiscription == undefined)){
           this.discriptionReady = false;
         } else {
           this.discriptionReady = true;
         }
         if ((this.questionExample == '') || (this.questionExample == undefined)){
           this.exampleReady = false;
         } else {
           this.exampleReady = true;
         }

       }
     },
     getAnwsersQuantity: function (){

     }

  }
})

Vue.directive('focus', {
    bind: function () {
        var object = this.el;
        Vue.nextTick(function() {
            object.focus();
        });
    }
});


var getResults = new Vue({
  el: '#getResults',
  data:{
  show: false,
  summ: '',
  state: testCondition
},
  methods:{
    getResults: function (){
      if (!this.show){
       this.show = true;
      } else {
        this.show = false;
      }

    console.log("OK");
    console.log(firstAnwsersArray[0]);
    console.log(firstAnwsersArray[0] + firstAnwsersArray[1])
  },

  }
})
