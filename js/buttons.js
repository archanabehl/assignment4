function fToCButton() {
  return document.querySelector("#fahrenheit-to-celsius");
}

function cToFButton() {
  return document.querySelector("#celsius-to-fahrenheit");
}

function onFToCButtonClicked(callback) {
  fToCButton().addEventListener("click", callback);
}

function onCToFButtonClicked(callback) {
  cToFButton().addEventListener("click", callback);
}

function setFToCButtonBlue() {
  fToCButton().classList.replace("btn-secondary", "btn-primary");
}

function setFToCButtonGray() {
  fToCButton().classList.replace("btn-primary", "btn-secondary");
}

function setCToFButtonBlue() {
  cToFButton().classList.replace("btn-secondary", "btn-primary");
}

function setCToFButtonGray() {
  cToFButton().classList.replace("btn-primary", "btn-secondary");
}
