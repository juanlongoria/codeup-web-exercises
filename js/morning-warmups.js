//Wrapped IIFE
(function() {

    function returnsSeven() {
        return 7;
    }
//test
    console.log(returnsSeven());

    if (false) {
        console.log("Am I Seen?");
    } else {
        console.log("What about me?");
    }

    var hadBreakfast = Boolean(Math.round(Math.random()));

    var hadBreakfastMessage = (hadBreakfast) ? "That was a good breakfast." : "My tummy is rumbling.";

    console.log(hadBreakfast);
    console.log(hadBreakfastMessage);

})();
//
// Write a function called 'typeCheck' that takes an input
// and returns a string of the data type entered.
// If the data type is a string, return the
// string "Haha, it's a string of string!"
//
// Tests:
//     typeCheck('')
// typeCheck(isNaN());
// typeCheck(!false * 3);
// typeCheck(4 + '4');

function typeCheck(input) {
    if (typeof input === 'string') {
        return 'Haha, it\'s a string of a string';
    } else {
        return typeof input;
    }
}

console.log('input is an empty string: ', typeCheck(''));
//console.log('input isNaN(): boolean ' , typeCheck(isNaN());
console.log(typeCheck(!false * 3));
console.log(typeCheck(4 + '4'));

// FizzBuzz
for (var i = 1; i<=100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i)
    }
}

//
function secondToLast(arr){
    return  arr[arr.length - 2];
}
console.log(secondToLast(["First", "Second", "Not Last", "Last"]));

//
 function moveToEnd(array) {

    return array.push(array.shift());
 }

 console.log(moveToEnd([1, 2, 3, 4, 5, 6]));
