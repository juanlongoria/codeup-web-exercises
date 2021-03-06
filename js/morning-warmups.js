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

 //10-25
var charmander = {
    name: 'charmander',
    description: 'Lizard category pokemon',
    height: {
        feet: 3,
        iches: 4
    },
    type: ['fire', 'flying']
};

//10-26
var wrestlers = [
    {
        name: "Bret Hart",
        nationality: "Canadian"
    }, {
        name: "Shawn Michaels",
        nationality: "American"
    }, {
        name: "Christian Cage",
        nationality: "Canadian"
    }, {
        name: "Keiji Mutoh",
        nationality: "Japanese"
    }, {
        name: "Eddy Guerrero",
        nationality: "American"
    }, {
        name: "Owen Hart",
        nationality: "Canadian"
    }
];

function canadian(arr) {
    //var bucket = [];
    arr.forEach(function (wrestler) {
        if (wrestler.nationality === "Canadian") {
            console.log(wrestler.name)
            //bucket.push(wrestler);
        }
    });
    //return bucket;
}
canadian(wrestlers);
//console.log(canadian(wrestlers));

//10/27

var circle = {
    radius: 36
}

// Area of a circle = PI * radius^2

var area = Math.round(Math.PI * (Math.pow(circle.radius, 2)));

console.log(area);

//11/02

var groceries = [
    {
        name: "carrots",
        quantity: 5
    },{
        name: "yams",
        quantity: 50
    },{
        name: "oranges",
        quantity: 9
    },{
        name: "onions",
        quantity: 2
    },{
        name: "cucumbers",
        quantity: 6
    },{
        name: "potatoes",
        quantity: 8
    }
];

// function getHighestQuantityObject(groceries) {
//     groceries.forEach(function (foodItem)  {
//         if (foodItem.quantity === 50) {
//             console.log(foodItem.name)
//         }
//     });
// }
//  getHighestQuantityObject(groceries);

function getHighestQuantityObject(arr) {
    var obj = {
        name: "any",
        quantity: 0
    }
    arr.forEach(function(el) {
        if(el.quantity > obj.quantity) {
            obj = el;
        }
    });
        return obj;
}

console.log(getHighestQuantityObject(groceries));

//11/03
var products = [
    {
        name: 'Playstation 5',
        price: 599.99
    }, {
        name: 'Logitech Wireless Mouse',
        price: 23.99
    }, {
        name: 'Macbook Pro',
        price: 1099.99
    }, {
        name: 'GoPro HERO10',
        price: 399.99
    }, {
        name: '12" & 6" Metal Ruler Set',
        price: 5.99
    }]

function sortByName(arr) {
    return arr.sort(function(a, b) {
        var aLower = a.name.toLowerCase();
        var bLower = b.name.toLowerCase();

        if(aLower < bLower) {
            return -1;
        } else if(aLower > bLower) {
            return 1;
        } else {
            return 0;
        }
    });
}

console.log(sortByName(products));

//11/09
//Write a function in JavaScript that takes in an array of objects and returns the object
// with the lowest height property. Consider the following array to test your code.

var bBallPlayers = [
    {
        name: "Hakeem Olajuwon",
        height: 213
    }, {
        name: "Muggsy Bogues",
        height: 160
    }, {
        name: "Chris Paul",
        height: 183
    }, {
        name: "Bol Bol",
        height: 218
    }, {
        name: "Moochie Norris",
        height: 185
    }, {
        name: "Manu Ginobili",
        height: 198
    }
];

//...this got tallest player
// function getLowestHeight(arr) {
//     var obj = {
//         name: "anything",
//         height: 0
//     }
//     arr.forEach(function(el) {
//         if(el.height > obj.height) {
//             obj = el;
//         }
//     });
//     return obj;
// }
//
// console.log(getLowestHeight(bBallPlayers));

function getLowestHeight(arr) {
    var play = {height: Number.MAX_VALUE};
    arr.forEach(function (lot) {
        if (lot.height < play.height) {
            play = lot;
        }
    });
    return play;

}
console.log(getLowestHeight(bBallPlayers));

//11/10

var myCharacter = {
    name: 'obijuan-kanobi',
    hitPoints: 100,
    class: 'Warrior',
    abilities: {
        attack: function(obj) {
            console.log(myCharacter.name + " hit " + obj.name + " for " + myCharacter.weapon.damage + " damage!")
            obj.hitPoints -= myCharacter.weapon.damage;
            console.log(obj.name + " has " + obj.hitPoints + " hit points left!")
        },
    },
    magicPoints: 0,
    weapon: {
        name: 'Silver Sabre',
        damage: 16,
        type: 'sword'
    }
}

var enemy = {
    name: 'Savage Orc',
    hitPoints: 100,
    class: 'Warrior',
    magicPoints: 0,
}

myCharacter.abilities.attack(enemy);
myCharacter.abilities.attack(enemy);
myCharacter.abilities.attack(enemy);
myCharacter.abilities.attack(enemy);

//11/12 return random item from array

//randomEl(["rock", "paper", "scissors", "lizard", "spock"])
function randomEl(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

console.log(randomEl(["rock", "paper", "scissors", "lizard", "spock"]));