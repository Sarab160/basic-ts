"use strict";
// 2
var stud = "Eric";
// console.log('hello',stud,"would you like learn phython today");
//3
var personsName = ["sarab", "wasif", "cheema"];
/*console.log("lowercase",personsName[0]);
console.log('uppercase',personsName[1]);
console.log("titlecase",personsName[2]);*/
//4
var aurthur = "Albert Einstein";
var quote = "A person who never made a mistake never tried anything new.";
// console.log(aurthur,"once said,",`"${quote}"`);
//5
let famousPerson = "Sarab";
let message = "everyone will get what he works for";
// console.log(message);
//7
var addition = 6 + 2;
//console.log("Addition result =",addition);
var subtraction = 12 - 4;
//console.log("subtraction result =",subtraction);
var multiplication = 4 * 2;
//console.log("multiplication result =",multiplication);
var divison = 64 / 8;
//console.log("divison result =",divison);
//25
var alliencolour = "green";
if (alliencolour == "green") {
    //console.log("player just earned 5 points");
}
else {
}
//26
var alliencolour1 = "green";
if (alliencolour1 == "green") {
    //console.log("player just earned 5 points");
}
else {
    //console.log("playes just earned 10 points");
}
var alliencolour2 = "red";
if (alliencolour2 == "green") {
    //console.log("player just earned 5 points");
}
else {
    //console.log("player just earned 10 points");
}
//27
var alliencolour3 = "green";
if (alliencolour3 == "green") {
    // console.log("player just earned 5 points");
}
var alliencolour4 = "red";
if (alliencolour4 == "red") {
    // console.log("player earned 15 points");
}
var alliencolour5 = "yellow";
if (alliencolour5 == "yellow") {
    // console.log("player just earned 10 points");
}
//28
var age = 20;
if (age < 2) {
    console.log("baby");
}
else if (age == 2 && age < 4) {
    console.log("toddler");
}
else if (age == 4 && age < 13) {
    console.log("kid");
}
else if (age == 13 && age < 20) {
    console.log("teenager");
}
else if (age == 20 && age < 65) {
    //console.log("adult");
}
else {
    console.log("older");
}
//29
var fruits = ["Apple", "Mango", "Banana"];
if (fruits[0] == "Apple") {
    // console.log("you really like Apple!");
}
if (fruits[1] == "grapes") {
    // console.log("yu like grapes!");
}
if (fruits[1] == "Mango") {
    // console.log("you like Mango!");
}
if (fruits[2] == "Banana") {
    // console.log("you like banana!");
}
if (fruits[0] == "pineapple") {
    console.log("yiu like pineapple!");
}
//30
var userNames = ["Admin", "Sarab", "Saqib", "wasif", "taqi"];
if (userNames[0] == "Admin") {
    console.log("Hello Admin would you like to see a status report?");
}
else {
    console.log("hello");
}
//21
let car = {
    company: "toyata",
    model: "v8",
    colour: "black",
    modelyear: 2023,
    inuse: false
};
//console.log(car);
//9
var favNumber = 8;
if (favNumber == 8) {
    //console.log(8 ,"is may favourite number");
}
//11
var calledNames = ["saqib", "wasif", "taqi", "sarab"];
var friends = calledNames.forEach((calledNames) => {
    // console.log(calledNames);
});
//12
var freindsgroup = ["saqib", "wasif", "taqi", "sarab"];
var message2 = freindsgroup.forEach((freindsgroup) => {
    //console.log(freindsgroup,"have a nice day my freind");
});
//  13
const motorcycles = ["Honda", "Yamaha", "Kawasaki", "Ducati", "BMW"];
var transport = motorcycles.forEach((data) => {
    // console.log(`i would like to own ${data} motorcycle`);
});
//8
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
console.log(5 + 3);
//6
const nameWithWhitespace = "\t\tJohn Doe\n";
// Print the name with whitespace
//console.log("Name with whitespace:");
//console.log(nameWithWhitespace);
// Strip the whitespace and print the name
const strippedName = nameWithWhitespace.trim();
//console.log("\nName after stripping whitespace:");
//console.log(strippedName);
//14
var guests = ["rock", "jack", "deep"];
var invitataion = guests.forEach((guests) => {
    // console.log(`Hy ${guests} i would like to invite yu on dinner`);
});
//36
function make_tshirts(size, textmsg) {
    // console.log(`size of shirt is ${size}`);
    // console.log(`Message on tshirt is ${textmsg}`);
}
make_tshirts(35, "hey buddy light weight");
//37
function shirts(size, size2, logo) {
    // console.log(`large shirt and its size is ${size} logo is ${logo}`);
    // console.log(`medium shirt size is ${size2} logo is ${logo}`);
}
shirts(42, 39, "i love typescripit");
//38
function described_cities(city, country, city2, country2, city3, country3) {
    // console.log(`${city} is in ${country}`);
    // console.log(`${city2} is in ${country2}`);
    // console.log(`${city3} is in ${country3}`);
}
described_cities("karachi", "pakistan", "Delhi", "india", "london", "England");
//39
function citycountry(city, country) {
    return `"${city}", "${country}"`;
}
const city1 = citycountry("lahore", "pakistan");
const city2 = citycountry("Newyork", "america");
const city3 = citycountry("kanpur", 'india');
// console.log(city1);
// console.log(city2);
// console.log(city3);
//35
var animals = ["dog", 'cat', 'horse', "cow"];
//to print the animals name in list
for (let i = 0; i < animals.length; i++) {
    // console.log(animals[i]);
}
console.log('statement about each animal');
for (let i = 0; i < animals.length; i++) {
    switch (animals[i]) {
        case "dog":
            //  console.log(`A ${animals[i]} is a good pet`);
            break;
        case "cat":
            //console.log(`A ${animals[i]} is beautifull pet`);
            break;
        case "horse":
            // console.log(`${animals[i]} is a symbol of strength`);
            break;
        case "cow":
        //console.log(`${animals[i]} is a source of milk`);
    }
}
//console.log("Any of these animals would make a great pet!");
//28
var random = ["canada", 'urdu', 'car', 'chak jhumra', "moon"];
console.log("list of random");
for (let i = 0; i < random.length; i++) {
    console.log(random[i]);
}
