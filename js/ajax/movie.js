const key = "600ed900ced08d3db54c5d84d95d83fd";

const msgDiv = document.getElementById("msg");
const btn = document.querySelector("button");
const now = new Date();

function initialize() {
  const txtYear = document.getElementById("txtYear");
  const selMon = document.getElementById("selMon");
  const selDay = document.getElementById("selDay");

  const year = now.getFullYear();
  const month = now.getMonth() + 1; //0월부터 시작함
  const day = now.getDate() - 1; //어제 날짜 필요

  txtYear.value = year;
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;

  btn.addEventListener("click", () => {
    const targetDt = `${txtYear.value}${selMon.value}${selDay.value}`;
    getMovieInfo(targetDt);
  });
}

function getMovieInfo(targetDt) {
  fetch(
    `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("네트워크 응답 실패");
      }
      return response.json();
    })
    .then((data) => {
      const existingTable = msgDiv.querySelector("table");
      if (existingTable) {
        existingTable.remove(); // 기존 테이블 요소를 DOM에서 삭제
      }

      const movieData = data.boxOfficeResult.dailyBoxOfficeList;
      let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th>영화 코드</th>
                        <th>영화 제목</th>
                        <th>순위</th>                        
                        <th>순위 증감분</th>
                    </tr>
                </thead>
                <tbody>
        `;
      movieData.forEach((item) => {
        tableHTML += `
                <tr>
                    <td>${item.movieCd}</td>
                    <td class="movie-name">${item.movieNm}</td>
                    <td>${item.rank}</td>                    
                    <td>${item.rankInten}</td>
                </tr>
            `;
      });
      tableHTML += `
                </tbody>
            </table>
        `;
      msgDiv.insertAdjacentHTML("afterbegin", tableHTML);
    })
    .catch((error) => {
      console.error("영화 정보 로드 중 오류 발생:", error);
      msgDiv.textContent = "데이터를 불러오는 데 실패했습니다.";
    });
}

initialize();
