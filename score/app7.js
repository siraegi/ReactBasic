// 1. promise 개념 : 비동기를 순차적으로 처리한다.
// 2. promise를 만드는 2가지 방법과 그 차이점 알기
// 3. promise를 사용하는 방법

//1)promise 를 만드는 방법 : 생성자함수
/*let promise = new Promise(resolve => {
  setTimeout(()=>{
    console.log('async setTimeout');
    resolve('success');
  }, 3000);
});*/
//Promise 생성자안의 펑션은 executor로써 선언과 동시에 실행된다.
//pending 상태 => resolve 상태 => settled 상태


/*promise.then(value=>{
  console.log(value);
});*/

// 아래 코드는 비동기가 순차적으로 처리되지 않는다.
// 순차적으로 처리하기 위해서 코드를 수정하자.

/*new Promise(resolve => {
  setTimeout(()=>{
    console.log('async1');
    resolve('success');
  }, 1000);
}).then(value=>{
  //Promise를 리턴하여 비동기 작업을 동기식으로 처리한다. setTimeout 같은 비동기를 new Promise로 감싸지 않으면 비동기적으로 동작한다.
  console.log('Hello '+value);
  setTimeout(()=>{
    console.log('async2');
  }, 3000);
  return value;
}).then(value=>{
  console.log('HI '+value);
});*/
//답)
new Promise(resolve => {
  setTimeout(()=>{
    console.log('async1');
    resolve('success');
  }, 1000);
}).then(value=>{
  //Promise를 리턴하여 비동기 작업을 동기식으로 처리한다. setTimeout 같은 비동기를 new Promise로 감싸지 않으면 비동기적으로 동작한다.
  console.log('1 '+value);
  return new Promise(resolve => {
    setTimeout(()=>{
      console.log('async2');
      resolve(value);
    }, 1000);
  });
}).then(value=>{
  console.log('2 '+value);
});

// async는 함수앞에 사용되어 함수를 비동기로 만든다.
// async는 반드시 await와 같이 사용하여야 한다.
// await 뒤에는 Promise가 와야하고, Promise가 그 결과를 리턴할때까지 기다린다.
// async 비동기 함수가 리턴된 결과를 받기 위해서 then 문을 연결할수 있다.

console.log('start');

function resolveAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x);
    }, 2000);
  });
}

async function add1(x) {
  const a = await resolveAfter2Seconds(20);
  console.log(a);
  const b = await resolveAfter2Seconds(30);
  console.log(b);
  return x + a + b;
}

console.log(add1(10));

console.log('end');