// 함수 == 메소드
function foobar() {
  var foo = 5;
  console.log(foo);
}

//ReferenceError: foo is not defined
//console.log(foo);
foobar();

// if (true) {
//   var a = 6;
//   console.log(a);
// }

// console.log(a);

function foobar() {
  let foo = 10;
  console.log(foo);
}
//ReferenceError: foo is not defined
//console.log(foo);
foobar();

if (true) {
  let b = 8;
  console.log(b);
}
//ReferenceError: b is not defined
//console.log(b);
