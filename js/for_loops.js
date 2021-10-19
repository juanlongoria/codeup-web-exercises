"use strict"
//Create a function named showMultiplicationTable that
// accepts a number and console.logs the multiplication
// table for that number (just multiply by the numbers
// 1 through 10)
function showMultiplicationTable(num) {
    for(var i =1; i<= 10; i++) {

        console.log(num + "x" + i + "=" + i * num);
    }
}
showMultiplicationTable(7);
//Use a for loop and the code from the previous lessons
// to generate 10 random numbers between 20 and 200 and
// output to the console whether each number is odd or even.

for (var i =0; i<=10; i++) {

var randomNmbr = Math.floor((Math.random() * (200 - 20 + 1)) + 20);
if (randomNmbr % 2 === 0) {
    console.log(randomNmbr + " is an even num")
} else {
    console.log(randomNmbr + " is an odd num");
}
}
//create a pyramid repeating the numbers
for (var i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}


//Create a for loop that uses console.log to create
// the output shown below.
for (var i = 100; i >= 5; i= i - 5) {
    console.log(i);
}

//

