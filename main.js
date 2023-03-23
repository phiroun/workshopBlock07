//create three variables and each variable will be the result of each CALCULATION (three in total).
//the combination of the lock is 10-40-39.
//use three different arithmetic operators to generate each individual number, then display the combination in an alert popup.
//each variable contains the corresponding result of calculatoin using a unique arithmetic and each must equal one of the three codes in the combination.

//assign three variables for calculation.
var x = 5 + 5;
var y = 4 * x;
var z = x + y - 11;
//to find variable for first code.

console.log("The first code is", x);
//to find variable for second code.

console.log("The second code is", y);
//to find variable for last code.

console.log("the last code is", z);

//the result of the secret codes is: 10-11-9.
//set alert popup message for user
alert(
  "You have recieved this message because you have been chosen to open an important vault."
);
alert("Here is the secret combination: 10-40-39");
