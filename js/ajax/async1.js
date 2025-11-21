// async

async (parms) => {};

async function name(parmas) {}

async function logName() {
  return fetch(
    "http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=600ed900ced08d3db54c5d84d95d83fd&targetDt=20251120"
  ).then((response) => response.json());
}

const todo = await logName();
console.log(todo.boxOfficeResult.dailyBoxOfficeList[0]);
