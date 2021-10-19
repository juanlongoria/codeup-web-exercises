var haveEmail = confirm("Hey, wanna sign up for discounts?")
//
var areWeThereYet = false;

while(areWeThereYet === false) {
    areWeThereYet = confirm("Are we there yet?");
}
//

function incrementUntilTen(num) {
    var iterations= 0;
    while (num < 10) {
        num++;
    }
    return iterations
}