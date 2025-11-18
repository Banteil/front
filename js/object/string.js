// const msg = "hello javascript";
// console.log("특정 문자 위치 반환 ", msg.charAt(4));
// console.log("특정 문자 위치 찾기 ", msg.indexOf("j"));
// console.log("찾을 문자", msg.match("ja"));
// console.log("찾을 문자", msg.match("boy"));
// console.log("특정 문자 변경 ", msg.replace("hello", "hi"));
// console.log("특정 문자 찾기(위치) ", msg.search("ja"));
// console.log("문자 자르기 ", msg.slice(6, 10));
// console.log("문자 자르기 ", msg.substring(6, 10));
// console.log("문자 공백 제거 ", "       hello         ".trim());
// console.log("대문자 변경 ", msg.toUpperCase());
// console.log("소문자 변경 ", "ANCKSLDFISD".toLowerCase());

// 함수 작성
// 영문이름 소문자 입력, 전화번호 입력(000-0000-0000)
// 이름은 대문자로 출력, 000-0000-0000 => 000-####-0000

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// let lowerName = "";
// let phoneNum = "";

// rl.question("이름 입력 : ", (nameAnswer) => {
//   lowerName = nameAnswer;
//   rl.question("전화번호 입력 : ", (phoneAnswer) => {
//     phoneNum = phoneAnswer;
//     replaceInfo(lowerName, phoneNum);
//     rl.close();
//   });
// });

// function replaceInfo(lowerName, phoneNum) {
//   var upperName = lowerName.toUpperCase();
//   var censoredNum = phoneNum.replace(phoneNum.substring(4, 8), "####");

//   console.log(`이름 : ${upperName}, 전화번호 : ${censoredNum}`);
// }

// 이메일 입력받기
// 이메일 형식이 맞는지 확인 : @
// 아니면 입력값 확인 요청, 맞으면 출력

let email = "";
rl.question("이메일 입력 : ", (answer) => {
  email = answer;
  isValidEmail(email);
  rl.close();
});

function isValidEmail(email) {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var result = emailRegex.test(email.trim());
  console.log(result ? email : "이메일 형식을 확인해 주세요.");
}
