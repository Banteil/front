// const regEx = /d(b+)d/g;
// const origin = "cdbbdbsbz";

// console.log(regEx.exec(origin));
// console.log(origin.match(regEx));

// // 캡쳐링 : 패턴이 적용된 결과값을 가리키는데 사용 / 패턴을 여러번 적용하는데 사용
// // 비캡쳐링 : (?:패턴)
// const regEx1 = /(ko)+/;
// const origin1 = "kokokokoko";
// console.log(regEx1.exec(origin1));
// console.log(origin1.match(regEx1));
// console.log(origin1.match(/(?:ko)+/));

// const nameV = "John Smith";
// const regEx2 = /(\w+)\s(\w+)/;
// console.log(regEx2.exec(nameV));
// console.log(nameV.match(regEx2));
// const newName = nameV.replace(regEx2, "$2, $1");
// console.log(newName);

// 폼 전송 시 submit 기능 중지
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const form = e.target;
  // 이름 입력값 확인 : 한글, 2~5자 허용
  const name = form.name.value;
  const regName = /^[가-힣]{2,5}$/;
  if (!regName.test(name)) {
    alert("이름은 한글, 2~5 자리 이내여야 합니다.");
    form.name.focus();
    return;
  }
  // 전화번호 입력값 : 000-1234-5678
  const tel = form.tel.value;
  const regTel = /^\d{3}-\d{4}-\d{4}$/;
  if (!regTel.test(tel)) {
    alert("전화번호 양식에 맞춰 입력해 주세요. (000-0000-0000)");
    form.tel.focus();
    return;
  }

  form.submit();
});
