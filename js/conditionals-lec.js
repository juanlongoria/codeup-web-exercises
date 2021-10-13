var hasCow = true;
var hasGoat = true;

if (hasCow) {
    console.log("Milking Bessie");
} else if (hasGoat) {
    console.log("Milking Gertrude");
} else {
    console.log("Hey, I'm headed to Randall's for milk. Need Anything?");
}

//takes in number and returns 3 different argument

function isThisThirtyFive(parameter) {
    if (parameter === -35) {
        return "Well your clever, negative 35 is 35 in a way"
    } else if (parameter > 35) {
        return "No " + parameter + " is greater than 35"
    } else if (parameter < 35) {
        return "No " + parameter + " is less than 35"
    } else {
        return "Yes, that is 35"
    }
}

console.log(isThisThirtyFive(34));
console.log(isThisThirtyFive(35));
console.log(isThisThirtyFive(36));
console.log(isThisThirtyFive(-35));

//ternary

var doWeHaveMilk = false;

var action = (doWeHaveMilk) ? "Time to eat cereal." : "Headed to the store for milk";

console.log(action);

//look back at if/else

function isItNumber(parameter) {
    return (typeof parameter === "number") ? "Hey, that's a number." : "Hey, you're not a number!";
}

//switch statement

var color = prompt("What is your favorite color?").toLowerCase();

switch(color) {
    case "green":
        alert("What a coincidence, that's my favorite!");
        break;
    case "orange":
        alert("That's my brothers favorite color");
        break;
    default:
        alert(color + " is a weird color");
    case "grey":
        alert("Is it grey, or gray?");
        break;

}

var animal = "skink";
switch (animal) {
    case "cow":
        console.log("Milking Bessie");
        break;
    case "goat":
        console.log("Milking Gertrude");
        break;
    case "camel":
        console.log("Milking Camille");
        break;
    default:
        console.log("Headed to Kroger for milk, want anything?");
        break;

}

//switch statement and prompt

var favoLunchMeat = prompt("What's your favorite lunch meat?");

switch (favoLunchMeat) {
    case "olive loaf":
        alert("You have a bolt palette; good for you.");
        break;
    case "brisket":
        alert("Ah, the correct choice.");
        break;
    default:
        alert("That's fine. Nothing wrong with a little" + favoLunchMeat);
}