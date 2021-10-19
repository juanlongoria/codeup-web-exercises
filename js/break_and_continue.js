

var userNumbr = Number(prompt("Enter an odd number between 1 and 50"))
for (var y = 1; y < 50; y++) {
    if (y === 1) {
        console.log('number to skip is: ' + userNumbr)
    }
    if (y % 2 === 0) {
        continue;
    }
    if (y === userNumbr) {
        console.log('yikes skipping number' + userNumbr)
    } else{
        console.log('here is an odd number' + y)
    }
}



//

var random = Math.floor((Math.random()*50)+1);

console.log("Random odd number to skip is: " + random);
for (var i = 1; i < 100; i++) {

    if (i % 2 === 0) {
        // Skip the even numbers.
        continue;
    }

    if (random === i) {
        console.log("Yikes! Skipping number: " + i);
    } else {
        console.log("Here is an odd number: " + i);
    }

    if (i >= 49) {
        break;
    }

}
