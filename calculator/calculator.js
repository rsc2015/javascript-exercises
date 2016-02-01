/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(first, second) {
  return first * second;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */

function add(first, second) {
  return first + second;
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(first, second) {
  return first - second; 
}


/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
 function divide(first, second) {
  return first / second;
 }



/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

 function performOperation (first, second, operation) {
  return operation(first, second);
}

// var result = document.getElementById("result").innerHTML;

// document.getElementById("multiply").addEventListener("click", function(event) {

//   var firstOperand = parseInt(document.getElementById("firstOperand").value);
//   var secondOperand = parseInt(document.getElementById("secondOperand").value);

//   var result = performOperation(firstOperand, secondOperand, multiply);
//   document.getElementById("result").value = result;
//   console.log("multiply result", result);
// })

// document.getElementById("add").addEventListener("click", function(event) {
//   var firstOperand = parseInt(document.getElementById("firstOperand").value);
//   var secondOperand = parseInt(document.getElementById("secondOperand").value);

//   var result = performOperation(firstOperand, secondOperand, add);
//   document.getElementById("result").value = result;
//   console.log("add result", result);
// })

// document.getElementById("subtract").addEventListener("click", function(event) {
//   var firstOperand = parseInt(document.getElementById("firstOperand").value);
//   var secondOperand = parseInt(document.getElementById("secondOperand").value);

//   result = performOperation(firstOperand, secondOperand, subtract);
//   document.getElementById("result").value = result;
//   console.log("subtract result", result);
// })

// document.getElementById("divide").addEventListener("click", function(event) {
//   var firstOperand = parseInt(document.getElementById("firstOperand").value);
//   var secondOperand = parseInt(document.getElementById("secondOperand").value);

//   result = performOperation(firstOperand, secondOperand, divide);
//   document.getElementById("result").value = result;
//   console.log("divide result", result);
// })

var buttons = document.getElementsByTagName("button");
var firstOperand, secondOperand;

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function(event) {
    firstOperand = parseInt(document.getElementById("firstOperand").value, 10);
    secondOperand = parseInt(document.getElementById("secondOperand").value);

    var operation = window[event.target.id];


    var result = performCalculation(firstOperand, secondOperand, operation);

    document.getElementById("result").innerHTML = result;
    console.log("result",result);
  });
}


