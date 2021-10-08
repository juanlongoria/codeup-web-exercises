console.log("Hello, from external JavaScript");

alert("Welcome to my website!");

var userFavoriteColor = prompt("What's your favorite color?");
alert("Great, " + userFavoriteColor + " is also my favorite color!");

var littleMermaid = prompt("How many days did you rent Little Mermaid?")
var brotherBear = prompt("How many days did you rent Brother Bear?")
var hercules = prompt("How many days did you rent Hercules?")

var pricePerMovie = 3

var total = ((parseInt(littleMermaid) + parseInt(brotherBear) + parseInt(hercules))*(pricePerMovie));
alert("Total price for all three movies is " + total);

var googlePayRate = parseInt(prompt("What do you get payed per hour by Google?"))
var amazonPayRate = parseInt(prompt("What do you get payed per hour by Amazon?"))
var facebookPayRate = parseInt(prompt("What do you get payed per hour by Facebook?"))

var googleHours = prompt("How many hours did you work at Google?")
var amazonHours = prompt("How many hours did you work at Amazon?")
var facebookHours = prompt("How many hours did you work at Facebook?")

var totalWeekPay = (parseInt(googleHours)*googlePayRate)+(parseInt(amazonHours)*amazonPayRate)+(parseInt(facebookHours)*facebookPayRate);

alert("Total pay for the week is $" + totalWeekPay.toFixed(2));


var enroll = confirm("Did you want to register for class?");
var enrollConflicts = confirm("You don't have conflicts with your schedule?");
var classNotFull = confirm("Does the class have space?");
alert ("You have registered for class:" + (classNotFull && enrollConflicts && enroll));

var notEnroll = confirm("Did you want to register for class?");
var enrollConflicting = confirm("Will the class conflict with your schedule?");
var classFull = confirm("Is the class full?");
alert ("You have registered for class:" + !(classNotFull && enrollConflicts && enroll));



var isMember = ("Are you a member?")
var howManyItems = parseFloat(prompt("How many items are you purchasing?"))
var isOfferValid = confirm("Is the offer still valid?")
var discountEligible = isOfferValid && (howManyItems >2 || isMember);
alert("Discount Eligible: " + discountEligible);






var offerNotExpired = confirm("Is the coupon expired?");

var itemsBought = prompt("How many items did you purchase?");

var premiumMember = confirm("Are you a Premium Member?");

var itemsGreaterThan = 2;

var discountApplied = premiumMember && itemsBought > itemsGreaterThan || itemsBought > itemsGreaterThan && offerNotExpired

//
var premiumMember = confirm("Are you a premium member?");
if (premiumMember === true){
    var offerNotExpiredPremium = confirm ("Is the coupon expired");
    if(offerNotExpiredPremium === false){
        alert("Great, the offer has been applied.");
    }else{
        alert("Sorry, the offer has expired.");
    }


}else{
    var itemsBought = prompt("How many items did you purchase?");
    if (parseInt(itemsBought) >= 2) {
        var offerNotExpiredNotPremium = confirm("Is the coupon expired?");
        if (offerNotExpiredNotPremium === false) {
            alert("Great, the offer has been applied.")
        } else {
            alert("Sorry, the offer has expired");
        }
    }else
        {
            alert("Sorry, you did not purchase enough items.");
        }}







