// // 함수
// alert("사용자에게 메세지 전달");

// // 입력
// let input = prompt("숫자 입력", 100);
// console.log("사용자 입력값 : ", input);

// let isBoss = confirm("니가 보스냐?");
// console.log(isBoss ? "그렇다" : "아닌데요");

// if (confirm("게임을 시작하지")) {
//   document.writeln("ㅇㅋ ㄱ");
// } else {
//   document.writeln("살려줘");
// }

// 사용자에게 숫자를 입력받아 양수인지 음수인지 0인지 판단
let input = new Array(3);
let sum = 0;
let i = 0;
do {
  input[i] = parseInt(prompt(i + 1 + "번째 숫자 입력"));
  if (isNaN(input[i])) continue;
  let isPS = input[i] > 0 ? "양수" : input[i] < 0 ? "음수" : "0";
  document.writeln(isPS);
  let isOE = input[i] % 2 == 0 ? "짝수" : "홀수";
  document.writeln(isOE);

  sum += input[i];
  i++;
} while (i < 3);

let avg = sum / input.length;
document.writeln("평균 " + avg + "점");
let grade;
// if (avg >= 90) grade = "A";
// else if (avg >= 80) grade = "B";
// else if (avg >= 70) grade = "C";
// else if (avg >= 60) grade = "D";
// else grade = "F";

switch (parseInt(avg / 10)) {
  case 9:
    grade = "A";
    break;
  case 8:
    grade = "B";
    break;
  case 7:
    grade = "C";
    break;
  case 6:
    grade = "D";
    break;
  default:
    grade = "F";
    break;
}
document.writeln(grade);
