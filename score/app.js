// 아래는 함수 선언문(function definition)이다. 함수 표현식으로 바꾸시오.
// 함수 선언문과 함수 표현식의 차이점은 무엇인가? 표현식으로 바꾸면 에러가 나는가 안나는가?
function myName(first, last) {
  console.log(first + last);
}
let myName2=function(first, last){
  console.log(first + last);
}
myName('SHi','Hayeon');
myName2('si','raegi');
/////////////////////////////////////////////////////////////////////////////////////////////////
let circleArea = function(pi, r) {
  let area = pi * r * r;
  return area;
};

// 위는 함수 표현식이다. 익명함수 부분을 애로우 펑션으로 바꾸시오
/*function circleArea2(pi, r) {
  var area = () => pi * r * r;
  return area();
}*/
let circleArea3 = (pi, r) => {
  var area = () => pi * r * r;
  return area();
}

let result = circleArea3(3.14, 3);

let circleArea4 = (pi, r) => {
  return pi * r * r;
}
let result2 = circleArea4(3.14,3);

console.log(result2); //실행 결과 "28.26"
///////////////////////////////////////////////////////////////////////////////////////////////////
function person() {
  this.arms = 2;
  this.legs = 2;
}

// arms의 출력 결과는 무엇인가? -> 오류
// console.log(arms);
// Person() 실행결과는 무엇인가? 그 이유는? -> undefined
console.log(person());
// arms의 출력 결과는 무엇인가?  여기서 사용된 this는 무엇인가? 윈도우
//console.log(arms);

/////////////////////////////////////////////////////////////////////////////////////////////
function Person() {
  this.arms = 2;
  this.legs = 2;
}

// 자바스크립트에서 객체를 생성하는 2가지 방법은 무엇인가? 아래는 어떤 방법인가? 객체 리터럴/(Object 생성자 이용)
//객체 리터럴을 사용해 객체를 생성하는 방법은 내부적으로 new Object를 수행한 후 멤버를 구성하는 방법과 동일한 과정을 따른다..?
var person = new Person();
// 실행 결과는 무엇인가? 실행결과에 대해서 설명하시오.
console.log(person);
// literal 객체로  person 객체를 생성하시오.
var person2 = {arms: 3, legs: 3};
console.log(person2.arms);
// 실행 결과는 무엇인가? 여기서 사용된 this는 무엇인가? -> 에러, this는 윈도우?
//console.log(arms);
// 만일 this.arms, this.legs가 없다면 new Person()의 결과는 무엇인가? -> Person {}
//////////////////////////////////////////////////////////////////////////////////////////
function Animal(type, legs) {
  this.type = type;
  this.legs = legs;
  this.logInfo = function() {
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
var myCat = new Animal('Cat', 4);

// 리터럴 객체로 Animal 객체를 적으시오.
var Animal2 = {
  type: 'Cat',
  legs: 4,
  logInfo: function(){
    console.log(this === myCat);
    console.log('The ' + this.type + ' has ' + this.legs + ' legs');
  }
}
Animal2.type = 'Dog';
console.log(Animal2);
// 실행결과를 적으시오. function 안에 this는 무엇을 가르키는가? true, The Cat has 4 legs, Animal {type:'Cat', legs:4,loginfo: [Function]}
myCat.logInfo();
console.log(myCat);

// 실행결과를 적으시오. this는 무엇을 가르키는가? 윈도우 https://developer.mozilla.org/ko/docs/Web/API/WindowTimers/setTimeout#this_%EB%AC%B8%EC%A0%9C
setTimeout(myCat.logInfo, 1000);
//////////////////////////////////////////////////////////////////////////////

//map과 forEach의 차이?
// var items = ['1', '2', '3', '4', '5'];
// var newItems = items.map(item => parseInt(item));
// console.log(newItems);
//
// var newItems2 = items.forEach(item => parseInt(item));
// console.log(newItems2);
