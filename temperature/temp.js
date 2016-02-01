/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.

  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

var convertField = document.getElementsByName("toConvert").item(0);
var convertedF = document.getElementsByName("fanswer").item(0);
var convertedC = document.getElementsByName("canswer").item(0);

function colorCode (temp) {
    if (temp > 90) {
    convertedF.className = "hot";
    convertedC.className = "hot";
  } else if (temp < 32) {
    convertedF.className = "cold";
    convertedC.className = "cold";
  } else {
    convertedF.className = "normal";
    convertedC.className = "normal";
  }
};

function isFahrenheit (convertMe) {
  var cels = (convertMe - 32) * 5 / 9;
  var fahr = convertMe;

  convertedF.value = fahr;
  convertedC.value = cels;

  colorCode(fahr);
};

function isCelsius (convertMe) {
  var fahr = (convertMe * 9 / 5) + 32;
  var cels = convertMe;

  convertedF.value = fahr;
  convertedC.value = cels;

  colorCode(fahr);
};

// This function should determine which conversion formulas to apply based on which unit radio button is selected.
function determineConverter (clickEvent) {
  var units = document.getElementsByName("units");
  var numberToConvert = convertField.value;

    if (units.item(0).checked) {
      isFahrenheit(numberToConvert);
    } else if (units.item(1).checked) {
      isCelsius(numberToConvert); 
    } else {
      alert("Please Select A Unit Type");
    }
};

// This function checks what key is being pressed in the input field
function submitWithEnter (keyUpEvent) {  
  console.log("keyUpEvent", keyUpEvent.keyIdentifier);
  if (keyUpEvent.keyIdentifier === "Enter") {
    determineConverter(this.value);
  }
};

// Runs conversion when you hit enter
convertField.addEventListener("keyup", submitWithEnter);

// Convert Button
var convertButton = document.getElementById("convert")
convertButton.addEventListener("click", determineConverter);

// Clear Button
var clearButton = document.getElementById("clear")
clearButton.addEventListener("click", function(){
  document.getElementsByName("toConvert").item(0).value = "";
  convertedF.value = "";
  convertedC.value = "";
  convertedF.className = "";
  convertedC.className = "";
});







