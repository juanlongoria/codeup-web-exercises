"use strict";

(function(){

    var multipliedNum = 2;

    while(multipliedNum <= 65536) {
        console.log(multipliedNum);
        multipliedNum *= 2;
    }




var allCones = Math.floor(Math.random() * 50) + 50;
console.log("Opening up shop! I've got" + allCones + "comes to sell!");
do {
    var conesToBuy = Math.floor(Math.random() * 5) + 1;
    allCones -= conesToBuy;
    console.log("Customer wants to buy " + conesToBuy + " cones. I have" + allCones + " cones left in stock.");
} else {
    console.log("Sorry, we can't sell you " + conesToBuy + " cones. We only have " + allCones + " cones left in stock");


} while (allCones !== 0)

console.log("Closing up shop!");

})();