const numArr = [52, 273, 543, 32, 57, 103, 312, 2];
//최대값, 최소값 출력
const sortedArr = numArr.sort((a, b) => a - b);
console.log(`최대값 : ${sortedArr[sortedArr.length - 1]}`);
console.log(`최소값 : ${sortedArr[0]}`);

//사용자한테 한글로 행성 이름을 입력 받은 후 영어로 된 행성 이름 출력
const planetKor = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성"];
const planetEng = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
];

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function askPlanetName() {
  rl.question("행성 이름 입력 : ", (answer) => {
    const trimmedAnswer = answer.trim();
    const index = planetKor.indexOf(trimmedAnswer);
    if (index === -1) {
      console.log("해당 행성이 없거나, 잘못 입력되었습니다.\n");
      askPlanetName();
    } else {
      console.log(`영어 이름 : ${planetEng[index]}`);
      rl.close();
    }
  });
}

askPlanetName();
