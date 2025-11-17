// add(a, b) : 더한 결과 리턴(함수선언방정식)
function add(a, b) {
  return a + b;
}
console.log(add(5, 10));

//함수 표현식 변경
const add2 = function (a, b) {
  return a + b;
};
console.log(add2(5, 10));

//1~10까지 더한 결과 리턴 함수(표현식)
const sum_range = function (start, end) {
  const sumUntilEnd = (end * (end + 1)) / 2;
  const sumUntilBeforeStart = ((start - 1) * start) / 2;
  return sumUntilEnd - sumUntilBeforeStart;
};
console.log(sum_range(1, 10));

//3의 배수 찾기
//multiple(num) : num 3의 배수면 "박수" 출력, 아니면 "통과"
function multiple(num) {
  var result = num % 3 == 0 ? "박수" : "통과";
  console.log(result);
}
multiple(6);

//multiple2(num)
//3의 배수면 박수, 9의 배수면 박수x2, 아니면 통과
function multiple2(num) {
  var result = num % 9 == 0 ? "박수x2" : num % 3 == 0 ? "박수" : "통과";
  console.log(result);
}
multiple2(9);

//두 과목의 점수를 입력하면 합격 여부를 알려주는 함수
//pass(outline, law)
//두 과목 합해서 120점 이상이면 합격, 한 과목이 40점 미만이면 불합격
function pass(outline, law) {
  if (outline >= 40 && law >= 40 && outline + law >= 120) console.log("합격");
  else console.log("불합격");
}
pass(60, 70);
pass(100, 35);
