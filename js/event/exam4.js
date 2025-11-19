// form submit 발생 시
const exceptionMap = {
  name: (input) => {
    if (input.value === "") {
      alert("이름을 입력해 주세요.");
      return false;
    }
    return true;
  },
  password: (input) => {
    if (input.value === "") {
      alert("비밀번호를 입력해 주세요.");
      return false;
    }
    return true;
  },
  age: (input) => {
    if (input.value === "") {
      alert("나이를 입력해 주세요.");
      return false;
    }
    return true;
  },
};

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  // submit 중지
  // 검증
  // 내용이 잘 입력되어 있는지 확인 (예외처리)
  // 예외처리 걸리면 그 요소에 포커싱, 메세지 alert 띄우기
  // 내용이 전부 들어있다면 원래대로 submit 실행
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  for (const input of inputs) {
    const exceptionFunction = exceptionMap[input.id];
    if (!exceptionFunction(input)) {
      input.focus();
      return;
    }
  }
  e.target.submit();
});
