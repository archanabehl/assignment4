document.addEventListener("DOMContentLoaded", function() {
  onLeftTextFieldChange(value => {
    if (isEmpty(value)) {
      clearRightTextField();
      setRightTextFieldPlaceholder(rightTextField().placeholder);
    } else if (isNotValidNumber(value)) {
      setRightTextField(0);
    } else if (leftTextField().placeholder === "Celsius") {
      convertedValue = value * 1.8 + 32;
      setRightTextField(Math.round(convertedValue));
      cToFImage(value);
    } else {
      convertedValue = ((leftTextField().value - 32) * 5) / 9;
      setRightTextField(Math.round(convertedValue));
      fToCImage(value);
    }
  });

  onCToFButtonClicked(function() {
    if (fToCButton().classList.contains("btn-primary")) {
      clearLeftTextField();
      clearRightTextField();
      setLeftTextFieldPlaceholder("Celsius");
      setRightTextFieldPlaceholder("Fahrenheit");
      setCToFButtonBlue();
      setFToCButtonGray();
    }
  });

  onFToCButtonClicked(function() {
    if (cToFButton().classList.contains("btn-primary")) {
      clearLeftTextField();
      clearRightTextField();
      setLeftTextFieldPlaceholder("Fahrenheit");
      setRightTextFieldPlaceholder("Celsius");
      setCToFButtonGray();
      setFToCButtonBlue();
    }
  });

  function fToCImage(value) {
    // stringToNumber(value);
    if (value > 85) {
      setBeachBackgroundImage();
    } else if (value <= 85 && value > 65) {
      setSunBackgroundImage();
    } else if (value <= 65 && value > 50) {
      setFogBackgroundImage();
    } else if (value <= 50 && value >= 30) {
      setRainBackgroundImage();
    } else {
      setSnowBackgroundImage();
    }
  }

  function cToFImage(value) {
    // stringToNumber(value);
    if (value > 30) {
      setBeachBackgroundImage();
    } else if (value <= 30 && value > 18) {
      setSunBackgroundImage();
    } else if (value <= 18 && value > 10) {
      setFogBackgroundImage();
    } else if (value <= 10 && value > -1) {
      setRainBackgroundImage();
    } else if (value <= -1) {
      setSnowBackgroundImage();
    }
  }
});
