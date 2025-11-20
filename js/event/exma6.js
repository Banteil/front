const listContainer = document.querySelector(".list");
const tabContents = document.querySelectorAll(".tab-content");
const tabButtons = listContainer.querySelectorAll(".tab-button");

listContainer.addEventListener("click", (e) => handleTabClick(e));

function initializeTabs() {
  if (tabButtons.length > 0 && tabContents.length > 0) {
    tabButtons[0].classList.add("active");
    tabContents[0].classList.add("show");
  }
}

function handleTabClick(e) {
  const clickedElement = e.target;
  if (clickedElement.classList.contains("tab-button")) {
    const index = Array.from(tabButtons).indexOf(clickedElement);

    const activeTab = listContainer.querySelector(".tab-button.active");
    const activeContent = document.querySelector(".tab-content.show");

    if (activeTab) {
      activeTab.classList.remove("active");
    }
    if (activeContent) {
      activeContent.classList.remove("show");
    }

    clickedElement.classList.add("active");
    if (tabContents[index]) {
      tabContents[index].classList.add("show");
    }
  }
}

initializeTabs();
