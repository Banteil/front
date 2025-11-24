// 정규표현식
// 자바, JS, 파이썬에서 공통 사용
// 문자열에서 특정 문자 조합을 찾기 위한 패턴

const regex = new RegExp("Ajax", "g");
const origin = "JavaScript Ajax Java Python";

// 1. exec() : 일치 정보를 나타내는 배열 리턴 /못찾으면 null 리턴
console.log(regex.exec(origin));
console.log(regex.exec("JavaScript"));

// 2. test()
console.log(regex.test(origin));
console.log(regex.test("JavaScript"));

// 3. match() : string 메서드
console.log(origin.match(regex));
console.log("JavaScript".match(regex));

// 4. search() : 찾으면 시작위치 리턴 / 못찾으면 -1
console.log(origin.search(regex));
console.log("JavaScript".search(regex));

// 5. replace()
console.log(origin.replace(regex, "NULL"));
console.log("JavaScript".replace(regex, "NULL"));

// 정규표현식 생성
// const re1 = /ab+c/;
// const re2 = new RegExp("ab+c");

// 플래그
// g : 전역검색
// i : 대소문자 구분없는 검색
// m : 다중행 검색
// u : 유니코드

// 기호
// ^ : ~~ 시작하는 (^a)
// $ : ~~ 끝나는 (a$)
// . : 모든 문자, 숫자, 특문과 대응(1:1)
// \ : 문자 그 자체로 인식 (\. 하면 . 문자)
// [a-e] 범위 문자 찾기
// [^a-e] : 범위 문자 제외한 다른것
// (on|ues|rida) : 그룹으로 묶기
// 개수 지정
// + : 최소 1 ~ 무한대
// * : 최소 0 ~ 무한대
// ? : 최소 0 ~ 최대 1
// {1,3} : 최소 1 ~ 최대 3
// {3} : 최소 3 ~ 최대 3
// {3, } : 최소 3 ~ 무한대
// \w == [A-za-z0-9_]
// \W != [A-za-z0-9_]
// \s : 공백, 탭
// \S : 공백이 아닌것들
// \d : 숫자
// \D : 숫자가 아닌것들
