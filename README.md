# Weather App

We will be programming a Weather web application that converts Fahrenheit to Celsius and vice-versa.

## Instructions

1. Copy the starter files exactly as they are in this directory.
1. Read the Specifications for the available functions below.
1. Read the User Stories.
1. Pseudo code a solution to each user story with your partner.
1. Code a solution to each user story in the `main.js` file individually (share the solution).

## Specifications

### Converting numbers and strings

`isNotValidNumber(value)` - Returns `true` if `value` is not a string containing a valid number. Returns `false` otherwise.

`isEmpty(value)` - Returns `true` is `value` is an empty string. Returns `false` otherwise.

`stringToNumber(value)` - Given a string `value` with a valid number, returns the number. Otherwise, throws an error.

### Changing the background image

`setBeachBackgroundImage()` - Set the beach image as the background image.

`setRainBackgroundImage()` - Set the rain image as the background image.

`setSnowBackgroundImage()` - Set the snow image as the background image.

`setFogBackgroundImage()` - Set the fog image as the background image.

`setSunBackgroundImage()` - Set the sun image as the background image.

### Manipulating the Text Fields

`onLeftTextFieldChange(callback)` - Calls the `callback` function when the value of the left text field changes.

- The `callback` function will receive the value as the only parameter.

```javascript
onLeftTextFieldChange(value => {
  console.log("The value of the left text field is", value);
});
```

`clearLefTextField()` - Empty the text of the left text field and show the placeholder text.

`setLeftTextFieldPlaceholer(placeholder)` - Sets the placeholder text for the left text field.

`setRightTextField(value)` - Sets the text value of the right text field.

`clearRightTextField()` - Empty the text of the right text field and show the placeholder text.

`setRightTextFieldPlaceholder(placeholder)` - Sets the placeholder text for the right text field.

### Manipulating the Buttons

`onFToCButtonClicked(callback)` - Calls the `callback` function when the F to C button is clicked.

- The `callback` function wont receive any parameters.

```javascript
onFToCButtonClicked(() => {
  console.log("The F to C button was clicked!");
});
```

`setFToCButtonBlue()` - Sets the F to C button to the color blue.

`setFtoCButtonGray()` - Sets the F to C button to the color gray.

`onCToFButtonClicked(callback)` - Calls the `callback` function when the C to F button is clicked.

- The `callback` function wont receive any parameters.

```javascript
onCToFButtonClicked(() => {
  console.log("The C to F button was clicked!");
});
```

`setCToFButtonBlue()` - Sets the C to F button to the color blue.

`setCToFButtonGray()` - Sets the C to F button to the color gray.

## User Stories

```txt
GIVEN that the user has a web browser
WHEN the user visits the Weather website
THEN the user will see the Beach background image
AND the F to C button in Blue
AND the C to F button in Gray
AND the text field on the left with the placeholder text "Fahrenheit"
AND the text field on the right with the placeholder text "Celsius"
```

```txt
GIVEN that the user has loaded the Weather website
AND the F to C button is Blue
WHEN the user types a number into the text field on the left
THEN the text field on the right will show the value converted to Celsius.
```

```txt
GIVEN that the user has loaded the Weather website
AND the F to C button is Blue
WHEN the user types a string that is not a number into the text field on the left
THEN the text field on the right will show a zero.
```

```txt
GIVEN that the user has already typed into the text field on the left
WHEN the user erases all text from the text field on the left
THEN the text field on the left will show the placeholder text "Fahrenheit"
AND the text field on the right will show the placeholder text "Celsius"
```

```txt
GIVEN that the user has loaded the weather website
AND the C to F button is Gray
WHEN the user clicks on the C to F button
THEN the text field on the left will have the placeholder text "Celsius"
AND the text field on the right will have the placeholder text "Fahrenheit"
AND the C to F button will be Blue
and the F to C button will be Gray
```

```txt
GIVEN that the user has loaded the weather website
AND the user clicks on the C to F button
WHEN the user types into the text field on the left
THEN the text field on the right will show the value converted to Fahrenheit
```

```txt
GIVEN that the user has loaded the weather website
AND the user clicks on the C to F button
WHEN the user clicks on the F to C button
THEN the text field on the left will have the placeholder text "Fahrenheit"
AND the text field on the right will have the placeholder text "Celsius"
AND the text C to F button will be Gray
AND the F to C button will be Blue
```

### Bonus

```txt
GIVEN that the user has loaded the weather website
AND the F to C button is blue
WHEN the user types in a number into the left text field
AND hits enter
THE background image will change based on the "Image to Fahrenheit" scale.
```

```txt
GIVEN that the user has loaded the weather website
AND the user has clicked on the C to F button
WHEN the user types in a number into the left text field
AND hits enter
THE background image will change based on the "Image to Celsius" scale.
```

### Image To Fahrenheit

- Beach - Greater than 85
- Sun - Less than 85 and Greater than 65
- Fog - Less than 65 and Greater than 50
- Rain - Less than 50 and Greater than 30
- Snow - Less than 30

### Image to Celsius

- Beach - Greater than 30
- Sun - Less than 30 and Greater than 18
- Fog - Less than 18 and Greater than 10
- Rain - Less than 10 and Greater than -1
- Snow - Less than -1

## Assets

- beach.jpg
- fog.jpg
- rain.jpg
- snow.jpg
- sun.jpg
