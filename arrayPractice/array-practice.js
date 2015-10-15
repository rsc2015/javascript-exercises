var colors = ["red", "blue", "green", "yellow", "orange", "teal"];
console.log(colors.join("")); //quick way to join an array

var joinedColors = colors.join(",");
console.log("joinedColors", joinedColors);

var newColorArray = joinedColors.split(","); //quick way to split a string
console.log("newColorArray", newColorArray);

var reversedColors = colors.reverse();
console.log("reversedColors", reversedColors);

var sortedColors = colors.sort();// works fine for letters, but numbers are tricky
console.log("sortedColors", sortedColors);

var numbers = [10, 100, 20, 40, 45, 2]; 
var sortedNumbers = numbers.sort(function(first, second) {
  return first - second;
});
console.log("sortedNumbers", sortedNumbers);

//slice puts things out of an array
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //["Orange", "Lemon"]
console.log("citrus", citrus);

//slice with no parameters will create an exact duplicate of array in order to assign it to a new variable name.
var citrus = fruits.slice(); //["Banana", "Orange", "Lemon", "Apple", "Mango"]
console.log("citrus", citrus);


// The forEach method = to using a for loop to interate over items in an array.
colors.forEach(function(color) {
	console.log(color);
});

for (var i = 0; i < colors.length; i++) {
	console.log(color[i]);
}

// map method: lets you create a new array after executing some logic on each item in teh original array.

var reversedColors = colors.map(function(color) {
	return color.split("").reverse().join(""); //no for loop needed
});
console.log("reversedColors", reversedColors);

//versus

// filter method = lets you create a new array, which will be populated with items from the original array that match a certain criteria.

var fourLetters = colors.filter(function(color) {
	return color.length === 4;
});
console.length("fourLetters", fourLetters);

//versus

// var fourLetters = [];
// for (var i = 0; i < colors.length; i++) {
// 	if (color[i].length === 4) {
// 		fourLetters.push(colors[i]);
// 	}
// }
// console.log("fourLetters", fourLetters);

// reduce method = lets you perform the same operation on each item in an array, but returns only a single value resulting from teh logic you write.

var numbers = ["51", "10", "62", "4", "13", "9"];

var sum = numbers.reduce(function(prev, curr) {
	return prev + curr;
})
console.log("sum", sum);// returns sum as an integer

//versus

// var sum = 0; 
// for (var i = 0; i <numbers.length; i++) {
// 	sum += numbers[i];
// }
// console.log("sum", sum);

//Gary Bernhart Lightning Talk JavaScript - Watman 

OBJECTS!!!!!!!!!!!

var car = {
	make: "Nissan",
	wheels: 4,
	model: "Xterra",
	options: {
		ac: true,
		bulletProof: false,
		underlighting: false,
		spinners: true // NO comma
	}
}; 
console.log(car.options.spinners)

JavaScript!!!!!!!!!!

// What is the main purpose of a function? automate, not duplicate code
var globalVar = 90; 

function add(aardvark, monkey) {
	console.log(aardvark, monkey);
	// var anotherVar = 12345; 
	return aardvark + monkey;
}

var result = add(1, 2);

add(1, 2); 

// You can pass a function to another function. It does not execute until () are added. 

var globalVar = 90; 

function add(aardvark, monkey) {
	return monkey(aardvark, 3);
	// Must have return to display result in console.log
}
function subtract(one, two) {
	return one - two;
}

var result = add(1, subtract);
console.log("result", result);
// result = -2


var globalVar = 90; 

function add(aardvark, monkey) {
	return aardvark + monkey;
}
function subtract(one, two) {
	return one - two;
}
function divide(one, two) {
	return one / two;
}

var result1 = add(1, 2);
var result2 = subtract(10, 2);
var result3 = divide(10, 2);
console.log(result1, result2, result3);
// result = 3 8 5 

var globalVar = 90; 

function add(aardvark, monkey) {
	return aardvark + monkey;
}
function subtract(one, two) {
	return one - two;
}
function divide(one, two) {
	return one / two;
}

var result1 = add(1, 2);
var result2 = add(3, 4);
var result3 = add(6, 9);
var result4 = add(10, 20);
console.log(result1, result2, result3, result4);
// result = 3 7 15 30

// parameters and function agruments are the same thing; technically arguments; inside the ( , )









