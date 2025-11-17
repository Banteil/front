// 배열
const fruits = ["사과", "망고", "바나나", "수박", "자두", "포도"];
const others = ["과일", 1, 1.24, new Date(), true, {}];
const array1 = new Array("자전거", "자동차", "기차", "트럭", "오토바이");
const planet = new Array(
  "수성",
  "금성",
  "지구",
  "화성",
  "목성",
  "토성",
  "천왕성"
);

// 배열 출력
console.log(fruits);
for (let index = 0; index < array1.length; index++) {
  const element = array1[index];
  console.log(element);
}

planet.forEach((element, idx) => {
  console.log(`${idx} : ${element}`);
});

for (const element of others) {
  console.log(element);
}

console.log(fruits[3]);

// 배열요소 추가
// push() : 뒤에 추가, unshift() : 앞에 추가
console.log("\n--------------- 배열요소 추가 ----------------");
fruits.push("메론");
fruits.unshift("딸기");
// 배열요소 변경
fruits[5] = "키위";

// 없는 index 사용 시 push 상황과 동일
fruits[9] = "파인애플";

console.log(fruits);

//배열요소 삭제
//splice() : 위치 지정 후 삭제 (기존요소 교체, deleteCount 0 시 삽입), pop() : 뒤에서 제거

array1.pop();
console.log(array1);

array1.splice(2, 1, "오토바이");
console.log(array1);

array1.splice(2, 0, "트럭");
console.log(array1);

// 배열 연결 후 문자열로 리턴 : join()
console.log(fruits.join(" "));
// 다른 배열과 연결하여 새로운 배열 리턴 : concat()
console.log(fruits.concat(planet));
console.log(fruits);

// slice()
console.log(fruits.slice(1, 3));

// 정렬
console.log(fruits.sort());
// 화살표 함수 : 원하는 정렬 방식 지정
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => a - b)); //오름차순
console.log([12, 6, 9, 1, 10, 7].sort((a, b) => b - a)); //내림차순
//indexOf()
console.log(fruits.indexOf("망고"));
console.log(fruits.indexOf("고"));
// 깊은복사 vs 얕은복사

console.log("\n--- 얕은 복사 : 주소복사 ---");
const fruits2 = fruits;
console.log(fruits);
console.log(fruits2);

//원본 수정
fruits[2] = "자동차";
console.log(fruits);
console.log(fruits2);

// ... : spread
console.log("\n--- 깊은 복사 : 값만 복사 ---");
const shallowCopy = [...fruits];
// 원본 수정
fruits[2] = "메론";
console.log(fruits);
console.log(shallowCopy);

// 숫자 1 => 5개를 요소로 하는 배열 생성 : (fill())
const array2 = new Array(5).fill(1);
console.log(array2);

const array3 = [12, 6, 9, 1, 10, 7];
// 조건에 만족하는 배열 첫 요소 추출 : find()
console.log(array3.find((a) => a > 5));
// 조건에 만족하는 배열 첫 요소의 인덱스 추출 : findIndex()
console.log(array3.findIndex((a) => a > 5));

const varArr1 = ["num1", "num2"];
const varArr2 = ["num3", "num4"];
const varArr3 = [varArr1, varArr2];
const varArr4 = [...varArr1, ...varArr2];
console.log(varArr3);
varArr1[0] = "num5";
console.log(varArr3);
console.log(varArr4);
