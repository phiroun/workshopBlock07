//create three variables and each variable will be the result of each CALCULATION (three in total).//
//the combination of the lock is 10-40-39.//
//use three different arithmetic operators to generate each individual number, then display the combination in an alert popup.//
//the three of oprator: (x * y - z), (x + y - z), (x - y + z).//
//each variable contains the corresponding result of calculatoin using a unique arithmetic and each must equal one of the three codes in the combination.//

//assign three variables for calculation.//
var x = 10
var y = 40
var z = 39
//to find variable for first code.//
var numCode1 = x * (y - z)
console.log("The first code is", numCode1)
//to find variable for second code.//
var numCode2 = x + y - z
console.log("The second code is", numCode2)
//to find variable for last code.//
var numCode3 = x - y + z
console.log("the last code is", numCode3)

//the result of the secret codes is: 10-11-9.//
//set alert popup message for user//
alert("You have recieved this message because you have been chosen to open an important vault.")
alert("Here is the secret combination: 10-11-9")