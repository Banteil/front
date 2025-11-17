// // 1~10 출력
// for (let index = 1; index < 11; index++) {
//   console.log(index);
// }

// let i = 1;
// while (i < 11) {
//   console.log(i);
//   i++;
// }

// i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i < 11);

// 객체 출력
// key:value
const myCar = { make: "BMW", model: "X5", year: 2013 };
console.log(myCar);
console.log("제조연도 : ", myCar["year"]);
console.log("모델 : ", myCar.model);

for (const key in myCar) {
  //console.log(myCar[key]);
  //console.log(key, ":", myCar[key]);
  console.log(`${key} : ${myCar[key]}`);
}

// 0~100 출력 증가 + 2
// 숫자가 48이 되면 반복문 중지
for (let index = 0; index < 100; index += 2) {
  console.log(index);
  if (index == 48) break;
}
