"use strict"

// upgift 1.

/*
max(5, 10); // hade skickat tillbaka 10
max(7, 7); // hade skickat tillbaka 7
min(12, 24); // hade skickat tillbaka 12
min(30, 18); // hade skickat tillbaka 18
*/

// function to return max value
function max (num1, num2){
  if(num1 > num2){
    return num1;
  }
  return num2;
}

// function to return min value
function min (num1, num2){
  if(num1 > num2){
    return num2;
  }
  return num1;
}

console.log(max(5, 10)); // hade skickat tillbaka 10
console.log(max(7, 7)); // hade skickat tillbaka 7
console.log(min(12, 24)); // hade skickat tillbaka 12
console.log(min(30, 18)); // hade skickat tillbaka 18



// upgift 2

/*
Skapa funktionen range som returnerar en array innehållande siffrorna 0 till n
där n är den parameter som skickades med, det vill säga att anropet range(5);
hade gett oss arrayen [0, 1, 2, 3, 4]. För att pröva er kod kan ni testa
kodexemplet nedan när ni skapat er funktion
*/

function range (n){
  var array = [];
  for(let i =0; i < n; i++){
    array.push(i);
  }
  return array;
}

var testArray = range(10);
console.log(testArray);


// upgift 3

/*
 Skapa funktionen sum som returnerar summan av alla siffror i en array.
 Det vill säga att anropet sum([5, 10, 15]); hade skickat tillbaka siffran 30.
 För att pröva er funktion kan ni utgå från kodexemplet nedan:
 */

 function sum (array){

   let sum = 0;
   for (let num of array){
      sum = sum + num;
   }
   return sum;
 }

  var numbers = [5, 10, 15, 20, 25];
  var sumOfNumbers = sum(numbers);
  console.log(sumOfNumbers);


  

 // upgift 4

/*
Skapa funktionen countCharacter som räknar antal upprepningar av en bokstav från en sträng.
Det vill säga att anropet countCharacter("Jane Doe", "e"); hade skickat tillbaka siffran 2
för det finns två stycken "e" i "Jane Doe". För att pröva att er funktion
fungerar kan ni utgå från kodexemplet nedan:
*/


function countCharacter(str, character){
  let numberOfTimes = 0;
  for(let c of str){
    if(c === character){
      numberOfTimes++;
    }
  }
  return numberOfTimes;
}

var testString1 = "Jane Doe";
var testString2 = "Abracadabra";

console.log(countCharacter(testString1, "e")); //  2
console.log(countCharacter(testString2, "a")); //  4 


// upgift 5
/*
Skapa funktionen palindrome som kontrollerar om en sträng är det samma som den är baklänges,
om så är fallet ska denna funktion returnera värdet true annars false.
Ta en titt på kodexemplet neda för att få mer information om hur funktionen ska fungera
*/
function palindrome (str){
  let firstIndex = 0;
  let lastIndex = str.length -1;

  while(firstIndex < lastIndex){
    if(str[firstIndex] != str[lastIndex]){
      return false;
    }
    firstIndex++;
    lastIndex--;
  }

  return true;
}

console.log(palindrome("sirap - paris")); // skickar tillbaka "true"
console.log(palindrome("lorem ipsum")); // skickar tillbaka "false"



// upgift 6
/*
Skapa ett objekt och spara det i variabeln person. Detta objekt ska ha följande attribut med respektive värde:
firstname, en sträng innehållande ert förnamn
lastname, en sträng innehållande ert efternamn
age, en siffra innehållande er ålder
family, en array innehållande namn på era familjemedlemmar (vilka och hur många ni väljer är valfritt
*/

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 34,
  family: ["Anna", "Molly", "David", "Alexender"]
};

console.log(person);

// upggift 7

/* Skapa funktionen printPerson som tar emot ett objekt som parameter och skriver
ut dess attribut (formatet på utskriften får ni bestämma själva). Ni kan utgå
från att objektet är strukturerat/innehåller samma attribut som det i uppgift 6.
För att förstå mer hur det är tänkt att fungera kan ni ta en titt på kodexemplet nedan:
*/

function printPerson(person) {
  console.log(`Fullname: ${person.firstName} ${person.lastName}, Age: ${person.age}`);
  if (person.family && person.family.length > 0) {
    console.log(`Family: ${person.family.join(", ")}`);
  }
}

printPerson(person); // "Fullname: Jane Doe, Age: 25", "Family: John, Eliza, Elise"

// uppgift 8

/*
Skapa funktionen createBox som tar emot två parametrar (height och width) och
returnerar ett objekt innehållande attributen height och width. För att förstå
mer hur det är tänkt att fungera kan ni ta en titt på kodexemplet nedan:
*/

function createBox (height, width){
  var box = {
    height: height,
    width: width
  };

  return box;
}

let box = createBox(15, 20); // Skriv ut attributen
console.log(box.height); // skickar tillbaka 15
console.log(box.width); // skickar tillbaka 20


// upggift 9
/*
Skapa funktionen Triangle som tar emot två parametrar (height och width) och
returnerar ett objekt innehållande attributen height och width samt en metod
(funktion) med namnet area. När denna metoden anropas ska arean räknas ut och
returneras (för att räkna ut arean kan ni använda formeln height * width / 2).
För att förstå mer hur det är tänkt att fungera kan ni ta en titt på kodexemplet
nedan
*/

function Triangle(height, width) {
  let triangle = {
    height: height,
    width: width,
    area: function() {
      return 0.5 * this.width * this.height;
    }
  };
  return triangle;
}

let tri = Triangle(12, 14);

console.log(tri.height); // skickar tillbaka 12
console.log(tri.width); // skickar tillbaka 14
console.log(tri.area()); // skickar tillbaka 84




// upggift 10

function attributes(obj) {
  let keys = [];
  for (let key in obj) {
      keys.push(key);
  }
  return keys;
}

let testObject1 = {
  width: 15,
  height: 20
};

let attrsFromObject1 = attributes(testObject1);
console.log(attrsFromObject1);


let testObject2 = {
  a: 1,
  b: 2,
  c: 3
};

let attrsFromObject2 = attributes(testObject2);
console.log(attrsFromObject2);
