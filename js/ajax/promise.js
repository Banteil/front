// Promise
// 상태
// 1. pending(대기)
// 2. fulfilled(이행)
// 3. rejected(실패)

const p1 = new Promise((resolve, reject) => {
  console.log("시작");
  setTimeout(() => {
    const isSuccess = true;

    if (isSuccess) {
      resolve("요청 성공");
    } else {
      reject(new Error("실패"));
    }
  }, 3000);
});

p1.then((result) => {
  console.log("성공적 처리", result);
})
  .catch((error) => {
    console.log("오류 : ", error.message);
  })
  .finally(() => {
    console.log("무조건 실행");
  });
