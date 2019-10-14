function leftTextField() {
  return document.querySelector("#initial-temperature");
}

function rightTextField() {
  return document.querySelector("#converted-temperature");
}

function onLeftTextFieldChange(callback) {
  leftTextField().addEventListener("change", function(event) {
    callback(event.target.value);
  });
}

function clearLeftTextField() {
  leftTextField().value = "";
}

function clearRightTextField() {
  rightTextField().value = "";
}

function setRightTextField(value) {
  rightTextField().value = value;
}

function setLeftTextFieldPlaceholder(placeholder) {
  leftTextField().placeholder = placeholder;
}

function setRightTextFieldPlaceholder(placeholder) {
  rightTextField().placeholder = placeholder;
}
