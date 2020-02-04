const select = document.querySelector(".js-select");

const COUNTRY_LS = "country";

function selectCountry() {
  select.addEventListener("change", handleChange);
}

function handleChange() {
  const currentCountry = select.value;
  localStorage.setItem(COUNTRY_LS, currentCountry);
}

function checkCountry() {
  const selected = localStorage.getItem(COUNTRY_LS);
  if (selected) {
    const option = document.querySelector(`option[value="${selected}"]`);
    option.selected = true;
  } else {
    const empty = document.querySelector("option[value=empty]");
    empty.selected = true;
  }
}

function init() {
  checkCountry();
  selectCountry();
}

init();
