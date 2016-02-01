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

function toCelsius(temp) {
  document.getElementById("temp-converted").innerHTML = Math.round((temp * (9 / 5)) + 32);
    console.log("toCelsius", toCelsius);

  var newCelTemp = document.getElementById("temp-converted").innerHTML;
    console.log("newCelTemp", newCelTemp);
    
    if (newCelTemp >= 32) {
      document.getElementById("temp-converted").style.color = "red";
    } else if (newCelTemp <= 0) {
      document.getElementById("temp-converted").style.color = "blue";
    } else {
      document.getElementById("temp-converted").style.color = "green";
    };
};

function toFahrenheit (temp) {
  document.getElementById("temp-converted").innerHTML = Math.round((temp - 32) * (5 / 9));  
    console.log("toFahrenheit", toFahrenheit);

  var newFahTemp = document.getElementById("temp-converted").innerHTML;
    console.log("newFahTemp", newFahTemp); 

    if (newFahTemp >= 90) {
      document.getElementById("temp-converted").style.color = "red";
    } else if (newFahTemp <= 32) {
      document.getElementById("temp-converted").style.color = "blue";
    } else {
      document.getElementById("temp-converted").style.color = "green";
    };
};


// Get a reference to the button element in the DOM
var button = document.getElementById("convert-button");
 console.log("button", button);
var radio = document.getElementsByName("temp");
 console.log("radio", radio);

var clickedRadioButton = "";

for (var i = 0; i < radio.length; i++) {
  console.log("radio index", radio[i]);
  radio[i].addEventListener("click", function(clickEvent) {
    console.log("clickEvent", clickEvent);
    clickedRadioButton = clickEvent.target.value;
    console.log("clickedRadioButton", clickedRadioButton);
  });
};

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
  if (clickedRadioButton === "celsius") {
   toCelsius(parseInt(document.getElementById("orig-temp").value)); 
  } 
  if (clickedRadioButton === "fahrenheit") {
   toFahrenheit(parseInt(document.getElementById("orig-temp").value));
  };
  console.log("event", clickEvent);
};

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);





