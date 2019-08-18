// Student 라는 이름의 클래스를 생성하시오.
class Student{
  constructor(name) {
    this.name = name;
  }
  changeName(userName){
    this.name = userName;
  }
  get nickname() {
    if(this.name.toString().length < 5)
      return "shortName";
    else return "longName";
  }
  get teacher(){
    return this.teacher_backing_property;
  }
  set teacher(name){
    this.teacher_backing_property = name;
  }

}
// 생성자를 추가하시오.
// 생성자에 name 파라메터를 받아서 name 속성에 할당하는 코드를 쓰시오
// "Jane" 이라는 이름을 파라메터로 넘겨서 user1 변수명을 가진 인스턴스를 생성하시오
const user1 = new Student("Jane");
console.log(user1);
// changeName이라는 이름의 메서드를 추가하시오.

// 이 메서드는 userName이라는 파라메터를 받아서 name 속성을 userName 값으로 업데이트해야한다.

// user1 인스턴스의 name 이 "Tom" 이 되도록 함수를 호출해서 변경해보자.
user1.changeName("Tom");
// 값이 바뀌었는지 출력해서 확인해보자
console.log(user1.name);
// 생성자의 역할은 무엇인가? - 객체를 생성..?
// 생성자에 사용된 this는 무엇을 가르키는가? - 객체 자신..?
// nickname 이라는 getter 를 추가하시오.
// 이 getter는 name이 5자이상이면 "longName", 이하면 "shortName"을 리턴한다.

// nickname을 출력해보자.
console.log(user1.nickname);
// teacher라는 이름을 가진 setter, getter 를 추가하자.
// setter는 name을 파라메터로 받아서 _teacher backing property에 저장하고
// getter 에서 이 backing property를 리턴한다.
user1.teacher="asdf";
console.log(user1.teacher);

