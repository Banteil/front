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
  // 월/일이 10보다 작으면 앞에 '0'을 붙여 두 자리로 만듭니다.
  selMon.value = month < 10 ? "0" + month : month;
  selDay.value = day < 10 ? "0" + day : day;

  btn.addEventListener("click", () => {
    // 날짜 유효성 검사 (옵션)
    const targetDt = `${txtYear.value}${selMon.value}${selDay.value}`;
    getMovieInfo(targetDt);
  });
}

/**
 * 일별 박스오피스 정보를 가져와서 테이블로 표시합니다.
 * @param {string} targetDt 조회할 날짜 (YYYYMMDD)
 */
function getMovieInfo(targetDt) {
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key}&targetDt=${targetDt}`;
  axios
    .get(url)
    .then((response) => {
      const existingTable = msgDiv.querySelector("table");
      if (existingTable) {
        existingTable.remove(); // 기존 테이블 요소를 DOM에서 삭제
      }

      const movieData = response.data.boxOfficeResult.dailyBoxOfficeList;
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
        const rankInten =
          item.rankInten > 0
            ? `▲ ${item.rankInten}`
            : item.rankInten < 0
            ? `▼ ${Math.abs(item.rankInten)}` // rankInten은 문자열이므로 Math.abs() 사용
            : "0";
        tableHTML += `
                <tr>
                    <td class="movie-cd" data-movie-cd="${item.movieCd}">${item.movieCd}</td>
                    <td class="movie-name">${item.movieNm}</td>
                    <td>${item.rank}</td>
                    <td>${rankInten}</td>
                </tr>
            `;
      });
      tableHTML += `
                </tbody>
            </table>
        `;
      msgDiv.insertAdjacentHTML("afterbegin", tableHTML);

      // DOM에 테이블이 추가된 후 영화 코드에 클릭 이벤트 추가
      // 이벤트 위임을 사용하여 성능 최적화
      const table = msgDiv.querySelector("table");
      if (table) {
        table.addEventListener("click", (event) => {
          const target = event.target;
          if (target.classList.contains("movie-cd")) {
            const movieCd = target.dataset.movieCd;
            getMovieDetail(movieCd);
          }
        });
      }
    })
    .catch((error) => {
      console.error("영화 정보 로드 중 오류 발생:", error);
      msgDiv.textContent = "데이터를 불러오는 데 실패했습니다.";
    });
}

/**
 * 영화 코드를 이용해 상세 정보를 가져와 팝업으로 표시합니다.
 * @param {string} movieCd 영화 코드
 */
function getMovieDetail(movieCd) {
  const url = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json?key=${key}&movieCd=${movieCd}`;

  axios
    .get(url)
    .then((response) => {
      const movieInfo = response.data.movieInfoResult.movieInfo;
      movieInfoPopup(movieInfo);
    })
    .catch((error) => {
      console.error("영화 상세 정보 로드 중 오류 발생:", error);
      alert("영화 상세 정보를 불러오는 데 실패했습니다.");
    });
}

/**
 * @param {Array<Object>} list 이름 정보가 담긴 객체 배열 (예: directors, actors)
 * @returns {string} 쉼표로 구분된 이름 목록 문자열
 */
function extractNames(list) {
  if (!list || list.length === 0) {
    return "정보 없음";
  }
  return list.map((item) => item.peopleNm).join(", ");
}

/**
 * 영화 상세 정보를 팝업 창에 표시합니다 (BLOB URL 방식).
 * @param {object} info 영화 상세 정보 객체
 */
function movieInfoPopup(info) {
  const movieNm = info.movieNm;
  const movieNmEn = info.movieNmEn || "정보 없음";
  const showTm = info.showTm ? `${info.showTm}분` : "정보 없음";
  const genres = info.genres.map((g) => g.genreNm).join(", ") || "정보 없음";
  const directors = extractNames(info.directors);
  const actors = extractNames(info.actors);

  // 테이블 행 HTML 생성
  const tableRows = `
        <tr><th>한글 제목</th><td>${movieNm}</td></tr>
        <tr><th>영어 제목</th><td>${movieNmEn}</td></tr>
        <tr><th>상영 시간</th><td>${showTm}</td></tr>
        <tr><th>장르</th><td>${genres}</td></tr>
        <tr><th>감독</th><td>${directors}</td></tr>
        <tr><th>배우</th><td>${actors}</td></tr>
    `;

  // 팝업 전체 HTML 구조
  const popupHTMLContent = `
        <!DOCTYPE html>
        <html lang="ko">
        <head>
            <title>${movieNm} 상세 정보</title>
            <meta charset="UTF-8">
            <style>
                body { font-family: 'Malgun Gothic', '맑은 고딕', sans-serif; padding: 20px; line-height: 1.6; background-color: #ffffff; }
                .detail-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 20px;
                }
                .detail-table th, .detail-table td {
                    border: 1px solid #ddd;
                    padding: 10px;
                    text-align: left;
                }
                .detail-table th {
                    width: 120px;
                    background-color: #f2f2f2;
                    font-weight: bold;
                    color: #333;
                }
                h2 {
                    color: #0056b3;
                    border-bottom: 2px solid #ccc;
                    padding-bottom: 10px;
                }
            </style>
        </head>
        <body>
            <h2>영화 상세 정보</h2>
            <table class="detail-table">
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
        </body>
        </html>
    `;

  // 1. HTML 콘텐츠를 Blob 객체로 생성
  const blob = new Blob([popupHTMLContent], { type: "text/html" });

  // 2. Blob 객체를 가리키는 URL 생성
  const blobUrl = URL.createObjectURL(blob);

  // 3. 새 팝업 창을 열고 URL을 로드
  const popup = window.open(
    blobUrl,
    "_blank",
    "width=600,height=450,scrollbars=yes"
  );

  if (!popup) {
    alert("팝업 차단이 활성화되어 있습니다. 팝업을 허용해주세요.");
    // 팝업이 차단되었을 때 URL을 메모리에서 해제합니다.
    URL.revokeObjectURL(blobUrl);
    return;
  }

  // 4. 팝업이 닫힐 때 URL을 메모리에서 해제하여 메모리 누수를 방지 (선택 사항)
  popup.addEventListener("unload", () => {
    URL.revokeObjectURL(blobUrl);
  });
}

initialize();
