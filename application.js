defCaption = "Введите кол-во ₽";
Vue.use(VueMaterial)

var firstQuestionsArray = ['Test', 'Ground', '', '', ''];
var firstQuestionsQuantity = firstQuestionsArray.length;
var firstQuestionNumbers = ["1", "2", "3", "4", "5"];
var firstQuestionDiscription = ['Under', '', '', '', ''];
var firstQuestionExample = ['', 'Ha', '', '', ''];
var firstAnwsersArray = [];

var secondQuestionsArray = ['', '', '', '', '', '', ''];
var secondQuestionsQuantity = secondQuestionsArray.length;
var secondQuestionNumbers = ["1", "2", "3", "4", "5", "6", "7"];
var secondQuestionDiscription = ['', '', '', '', '', '', ''];
var secondQuestionExample = ['', '', '', '', '', '', ''];
var secondAnwsersArray = [];

var thirdQuestionsArray = ['', '', ''];
var thirdQuestionsQuantity = thirdQuestionsArray.length;
var thirdQuestionNumbers = ["1", "2", "3"];
var thirdQuestionDiscription = ['', '', ''];
var thirdQuestionExample = ['', '', ''];
var thirdAnwsersArray = [];


var fourthQuestionsArray = ['', ''];
var fourthQuestionsQuantity = fourthQuestionsArray.length;
var fourthQuestionNumbers = ["1", "2"];
var fourthQuestionDiscription = ['', ''];
var fourthQuestionExample = ['', ''];
var fourthAnwsersArray = [];

Vue.material.theme.register('default', {
  primary: 'orange',
  accent: 'black'
})


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
    inputValue: ''
  },
  methods:{
     getNextData: function () {
       if (this.currentValue < this.questionNumbers - 1){
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
    inputValue: 0
  },
  methods:{
     getNextData: function () {
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
    inputValue: 0
  },
  methods:{
     getNextData: function () {
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
    defaultCaption: defCaption,
    currentValue: 0,
    show: true,
    discriptionReady: true,
    exampleReady: true,
    anwsersQuantity: 0,
    inputValue: 0
  },
  methods:{
     getNextData: function () {
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


var getResults = new Vue({
  el: '#getResults',
})
