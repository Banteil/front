// 수학
// 자바 : Math.random() == 자바스크립트

// console.log(Math.PI);
// console.log(Math.floor(3.14159)); //버림
// console.log(Math.ceil(3.14159)); //올림
// console.log(Math.abs(-3)); //절대값
// console.log(Math.max(5, 6, 8, 12, 1, 3)); //최대값
// console.log(Math.min(5, 6, 8, 12, 1, 3)); //최소값
// console.log(Math.random()); // 0 <= 랜덤 < 1
// console.log(Math.random() * 10);
// console.log(Math.floor(Math.random() * 11));
// console.log(Math.floor(Math.random() * 31));

// // 120 ~ 150 사이의 난수
// console.log(Math.floor(Math.random() * 31) + 120);

// 주사위 2개를 굴려 눈의 합이 5가 나올때 까지
// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// var i = 1;
// var win = false;
// function diceGame() {
//   rl.question(i + "번째 주사위 굴리기 : ", (answer) => {
//     if (answer === "auto") {
//       while (!win) {
//         gameProcess();
//       }
//       return;
//     }
//     gameProcess();
//   });
// }

// function gameProcess() {
//   win = diceRoll();
//   if (win) {
//     console.log("두 눈의 합이 5가 되어 승리!");
//     rl.close();
//   } else {
//     i++;
//     diceGame();
//   }
// }

// function diceRoll() {
//   var first = Math.floor(Math.random() * 6) + 1;
//   var second = Math.floor(Math.random() * 6) + 1;
//   console.log(`첫번째 주사위 : ${first}`);
//   console.log(`두번째 주사위 : ${second}`);
//   console.log(`두 눈의 합 : ${first + second}\n`);

//   return first + second == 5;
// }

// diceGame();

// 로또번호 6개 추출 후 배열에 담은 후 출력 (중복 X)
// 1~45
// function lottery() {
//   let lottoArray = new Array(6);
//   lottoArray.fill(-1);
//   for (let i = 0; i < lottoArray.length; i++) {
//     var rand = Math.floor(Math.random() * 45) + 1;
//     if (lottoArray.indexOf(rand) != -1) {
//       i--;
//     } else {
//       lottoArray[i] = rand;
//     }
//   }

//   console.log(`로또 추출 번호 : ${lottoArray}`);
// }

function lotteryEfficient() {
  const lottoArray = []; // 빈 배열로 시작
  const maxNumber = 45;
  const requiredCount = 6;

  // 배열의 길이가 6이 될 때까지 반복
  while (lottoArray.length < requiredCount) {
    // 1. 1부터 45 사이의 무작위 숫자 생성
    const rand = Math.floor(Math.random() * maxNumber) + 1;

    // 2. includes()를 사용하여 배열에 중복이 없는지 확인
    if (!lottoArray.includes(rand)) {
      // 3. 중복이 없으면 배열에 추가 (push)
      lottoArray.push(rand);
    }
    // 중복이 있으면 아무것도 하지 않고 while 루프가 다음 턴에 다시 시도함
  }

  console.log(`로또 추출 번호 (while): ${lottoArray}`);
}

lotteryEfficient();
