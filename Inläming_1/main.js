"use strict";

// Uppgift 1
console.log( 5 * 2 <  12 );
console.log( 55 >  22 );
console.log( 16 / 4 ==  4 );
console.log( 8 + 2  != 128 );
console.log( 32 * 8  >= 255 );


// Uppgift 2
let str1 = "Tisdag";
let str2 = "Hamburgare";
let str3 = "I will be back";

console.log(str1.substring(0,3));
console.log(str2.substring(3,10));
console.log(str3.substring(7,14));

// Uppgift 3
let str4 = "it's learning";
console.log(str4.substring(5,13).toUpperCase());
let str5 ="JavaScript: The Good Parts";
console.log(str5.substring(16,26).toLowerCase());

// Uppgift 4

var numbers = [128, 256, 512, 1024, 2048];
var sum = 0;

for(var i = 0; i < numbers.length; i++){
    sum += numbers[i];
}

console.log(sum);
console.log(sum/numbers.length);
numbers.push(sum);
console.log(numbers);


// Uppgift 5
var countries = ["Sweden", "Denmark", "Finland", "Norway"];
// Skriv ut de tre första bokstäverna av det andra elementet i konsollen
// Räkna ut och skriv ut medelvärdet för antal bokstäver för alla element i konsollen

console.log(countries[0].substring(0,3));
var sum = 0;
for(var i = 0; i < countries.length; i++){
    sum += countries[i].length;
}
console.log(sum);
console.log(sum/countries.length);


// Uppgift 6
var values = [3, 5, "Jane", true, 144, false];
// Ta reda på hur ni kan få innehållet av arrayen values att hamna i motsats ordning (baklänges) och skriv sedan ut detta i konsollen.
console.log(values.reverse());


// Uppgift 7
var names = ["Jane", "Joe", "Eliza"];
var ages = [21, 34, 22];
var hasPet = [true, false, true];

//I uppgift 7 ska ni slå ihop tre stycken arrayer till en egen array, utgå från följande arrayer:

var multipleArrays = [];

for(var i = 0; i < names.length; i++){
    multipleArrays.push({
        name: names[i],
        age: ages[i],
        hasPet: hasPet[i]
    });
}

console.log(multipleArrays);

// Uppgift 8
var actors = ["Sherlock", "Watson", "Bo"];

let actorsStr;
for(var i = 0; i < actors.length; i++){
    if(i == 0){
        actorsStr = actors[i];
    } else {
        actorsStr += " - " + actors[i];
    }
}

console.log(actorsStr);


// Uppgift 9
/*
* Om variabeln amount är mindre än 50 så ska ni skriva ut "Less then 50!" i konsollen
* Om variabeln amount är mer än eller lika med 50 och mindre än 65 så ska ni skriva ut "Optimal range for the amount!" i konsollen
* I alla andra fall så ska ni skriva ut "Too much!
*/

var amount = 55;
if(amount < 50){
    console.log("Less then 50!");
} else if(amount >= 50 && amount < 65){
    console.log("Optimal range for the amount!");
} else {
    console.log("Too much!");
}


// Uppgift 10

var str = "";
for(var i = 0; i < 8; i++){
    str += "#";
    console.log(str);
}
