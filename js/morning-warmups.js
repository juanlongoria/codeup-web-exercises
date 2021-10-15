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
