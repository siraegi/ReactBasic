/*
// 자바스크립트 실행순서 알기: 싱글쓰레드이다.
// 코드를 모두 실행하고 마지막에 예약된 큐를 확인해서 실행한다.
// 따라서 실행결과는 항상 동일하다.

console.log("A");

//예약
setTimeout(function () {
  console.log("B");
}, 0);

console.log("C");

//만일 루프가돌면?
// while(true) {}

//예약목록 확인 및 실행
*/

let book = {title: "인사이드 자바스크립트", price: 18000};
// 1. book을 카피한후에  price를 바꾸면 book과 copyBook이 같이 바뀐다. 이유가 무엇인가?
// 대입연산자는 shallow copy라서..?
let copyBook = book;
copyBook.price = 20000;
console.log(book);
console.log(copyBook);

// 2. book을 카피하되 deep copy를 수행한 후에 price를 30000으로 바꾸고 출력하라. 두개의 값이 달라야 한다.
let copyBook2 = JSON.parse(JSON.stringify(book));
copyBook2.price = 30000;
console.log(book);
console.log(copyBook2);
// 2-1 Object.assign() 사용하여 deep copy하기
let copyBook3 = Object.assign({}, book);
copyBook3.price = 40000;
console.log(copyBook3);
console.log(book);
// 2-2 es6 spread 연산자를 사용하여 deep copy 하기
const copyBook4 = {...book};
copyBook4.price = 50000;
console.log(copyBook4);
console.log(book);