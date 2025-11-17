// 화살표 함수 (람다식)
const mult = (a, b) => a * b;
const mult2 = (a, b) => {
  return a * b;
};
console.log(mult(10, 20));
console.log(mult2(15, 20));

const planet = new Array("수", "금", "지", "화", "목", "토", "천");
planet.forEach((element, idx) => console.log(`${idx} : ${element}`));

const array3 = [12, 6, 9, 1, 10, 7];
console.log(array3.find((item) => item > 5));

const showMsg = () => console.log("안녕하쇼");
showMsg();

const showDialog = (greeting, name) => console.log(`${greeting}, ${name}!`);
showDialog("안녕", "ㅇㅇ아");

const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const elements = [];
fruits.forEach((item) => elements.push(item));
console.log(elements);

// map()
const arr1 = [1, 4, 9, 16];
//각 요소에 *2를 한 결과를 저장한 새로운 배열 생성
const arr2 = [];
arr1.forEach((item) => arr2.push(item * 2));
console.log(arr2);

const arr3 = arr1.map((item) => item * 2);
console.log(arr3);

//filter()
const arr4 = arr1.filter((i) => i > 5);
console.log(arr4);
