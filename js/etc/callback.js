// callback?
// 다른 함수의 파라미터로 전달되어 이후에 어떤 이벤트가 발생했거나 특정 작업이 완료된 후에 호출되는 함수

//1초가 지난 후에 함수 호출

console.log("더 월드");
for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log(i + "초 경과");
  }, 1000 * i);
}
console.log("무다무다");
