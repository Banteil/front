// 일급함수 : 함수를 일반적인 값(정수, 문자열..)과 동일하게 취급하는 개념
// 변수에 할당
// 다른 함수의 인자, 리턴값으로 사용

const func1 = () => {
  console.log("변수 할당");
};

function logText(msg) {
  msg();
}

logText(func1);
