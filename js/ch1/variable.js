// 타입 지정은 따로 안함
// 변수선언 : var, let
// 상수선언 : const

var value1 = 4;
var value2 = 5;
console.log(value1 + value2);

//재선언
var value2 = 6;
console.log(value2);

//재선언 불가
// let value1 = 7;
value1 = 7;
console.log(value1);
let value3 = 8;
console.log(value3);

//'const' 선언을 초기화해야 합니다.
const value4 = 15;
// TypeError: Assignment to constant variable.
// value4 = 20;
console.log(value4);
