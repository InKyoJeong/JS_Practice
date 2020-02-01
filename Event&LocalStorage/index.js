// 아래 예제처럼 정말 강력한 선택자도 사용할 수 있습니다.
// 예제의 결과는 클래스가 "user-panel main"인
// <div>(<div class="user-panel main">) 안의,
// 이름이 "login"인 <input> 중 첫 번째 요소입니다.
// var el = document.querySelector("div.user-panel.main input[name=login]");

const select = document.querySelector(".js-select");
const option = select.querySelector("option");
// const inner = document.querySelector(".js-select option[value=`${number}`]")

const COUNTRY_LS = "country";

function saveCountry(some) {
  localStorage.setItem(COUNTRY_LS, some);
}

function selectCountry() {
  select.addEventListener("change", handleChange);
}

function handleChange(event) {
  event.preventDefault();
  const currentValue = select.value;
  saveCountry(currentValue);
}

function checkCountry() {
  const currentCountry = localStorage.getItem(COUNTRY_LS);
  if (currentCountry === null) {
    // emtry
    selectCountry();
  } else {
  }
}

function init() {
  checkCountry();
}

init();
