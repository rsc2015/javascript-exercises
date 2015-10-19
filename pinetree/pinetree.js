/*
  Create an `tree` function that accepts an integer
  as an argument. The function should create a pine
  tree out of asterisks in the browser console. The 
  height is whatever is passed as an argument to the 
  function.

  Example output with argument value of 5

            *
           ***
          *****
         *******
        *********

*/

// Create your function here. Make sure it takes the height argument.

// var tree = function(height) {
//   var i, 
//       branch = "*",
//       pinetree = [];
//       console.log("pinetree", pinetree);

//   if (i = 1) {
//     branch = height + 2;
//     console.log("branch", branch);
//   }
//   // for (i = 0; i = (height + 2); i++) {
//   //   document.write(height[i]+' ');
//   // }

//   return pinetree;
// };

// console.log("tree", tree(7));

var tree = function(height) {
  var pinetree = [];
  pinetree[height] = "*";

  for (var j = 0; j < pinetree.length; j++) {
    pinetree[j] = " ";
  }

  for (var i = 0; i < height; i++) {
    pinetree[height - i] = "*";
    pinetree[height + i] = "*";

    var pineOutput = pinetree.join("");
    console.log(pineOutput);
  }
};
tree(1);











