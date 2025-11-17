// 내장 함수
// window.confirm(), window.alert()
// isNaN(), parseInt(), parseFloat()

// 문자 인코딩
// a => 97 => 10021

console.log(
  encodeURI("http://localhost:8080/basic/info.html?name=홍길동&age=15")
  //http://localhost:8080/basic/info.html?name=%ED%99%8D%EA%B8%B8%EB%8F%99&age=15
  //영문 숫자 일부 기호만 제외
);
console.log("\n");
console.log(
  encodeURIComponent("http://localhost:8080/basic/info.html?name=홍길동&age=15")
  //http%3A%2F%2Flocalhost%3A8080%2Fbasic%2Finfo.html%3Fname%3D%ED%99%8D%EA%B8%B8%EB%8F%99%26age%3D15
  //영문 숫자만 제외
);

console.log("시작");
setTimeout(() => {
  console.log("안녕");
}, 2000);
console.log("종료");
