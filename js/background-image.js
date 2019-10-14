function backgroundImage() {
  return document.querySelector("main");
}

function clearBackgroundImage() {
  backgroundImage().classList.remove("rain-bg");
  backgroundImage().classList.remove("snow-bg");
  backgroundImage().classList.remove("fog-bg");
  backgroundImage().classList.remove("sun-bg");
  backgroundImage().classList.remove("beach-bg");
}

function setRainBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("rain-bg");
}

function setSnowBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("snow-bg");
}

function setFogBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("fog-bg");
}

function setSunBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("sun-bg");
}

function setBeachBackgroundImage() {
  clearBackgroundImage();
  backgroundImage().classList.add("beach-bg");
}
