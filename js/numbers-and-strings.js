function isNotValidNumber(value) {
  return typeof value !== "number" && isNaN(value);
}

function isEmpty(value) {
  return typeof value === "string" && value.length === 0;
}

function stringToNumber(value) {
  return parseInt(value, 10);
}
