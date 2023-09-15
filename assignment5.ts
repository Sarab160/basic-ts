// 2
var stud:string = "Eric"
// console.log('hello',stud,"would you like learn phython today");
//3
var personsName:string[] = ["sarab","wasif","cheema"];
//print name as list
/*console.log("lowercase",personsName[0]);
console.log('uppercase',personsName[1]);
console.log("titlecase",personsName[2]);*/
//4
var aurthur:string = "Albert Einstein";
var quote:string = "A person who never made a mistake never tried anything new."
// console.log(aurthur,"once said,",`"${quote}"`);
//5
let famousPerson:string = "Sarab";
let message:string = "everyone will get what he works for";//msg to print
// console.log(message);
//6
const nameWithWhitespace = "\t\tJohn Doe\n";
// Print the name with whitespace
//console.log("Name with whitespace:");
//console.log(nameWithWhitespace);

// Strip the whitespace and print the name
const strippedName = nameWithWhitespace.trim();
//console.log("\nName after stripping whitespace:");
//console.log(strippedName);
//7
var addition:number = 6+2;
//console.log("Addition result =",addition);
var subtraction:number = 12-4;
//console.log("subtraction result =",subtraction);
var multiplication:number = 4*2;
//console.log("multiplication result =",multiplication);
var divison:number = 64/8;
//console.log("divison result =",divison);
//8
console.log(5+3);
console.log(5+3);
console.log(5+3);
console.log(5+3);
//9
var favNumber:number = 8;
if(favNumber==8){
    //console.log(8 ,"is may favourite number");
}
//11
var calledNames:string[] = ["saqib","wasif","taqi","sarab"];
var friends = calledNames.forEach((calledNames)=>{
   // console.log(calledNames);
})
//12
var freindsgroup:string[] = ["saqib","wasif","taqi","sarab"];
var message2 = freindsgroup.forEach((freindsgroup:string)=>{
    //console.log(freindsgroup,"have a nice day my freind");
})
//  13
const motorcycles: string[] = ["Honda", "Yamaha", "Kawasaki", "Ducati", "BMW"];
var transport = motorcycles.forEach((data)=>{
   // console.log(`i would like to own ${data} motorcycle`);
})
//14
var guests:string[] = ["rock","jack","deep"];
var invitataion = guests.forEach((guests)=>{
   // console.log(`Hy ${guests} i would like to invite yu on dinner`);
})
//20
var random:string[] = ["canada",'urdu','car','chak jhumra',"moon"];
console.log("list of random");
for(let i=0;i<random.length;i++){
   // console.log(random[i]);   
}
//21
let car ={
    company:"toyata",
    model:"v8",
    colour:"black",
    modelyear:2023,
    inuse:false
}
//console.log(car);
//22
var find:number[] = [1,2,3,4,5,6,7,8,9];
const index = 11;
// console.log(`Accessing element at index ${index}: ${find[index]}`);
const index2 =3;
// console.log(`Accessing element at index ${index}: ${find[index2]}`);

//23
let jeep = "honda";
let age1 = 20;
let jeepcolour = 'black';
let rain = false;
// console.log("is jeep= 'honda' ? i predict true");
// console.log(jeep == "honda");
// console.log("is age1 < 22 ? i predict true");
// console.log(age1 < 22);
// console.log('is jeepcolour = white ? i predict false');
// console.log(jeepcolour== "black");
// console.log("is rain is happening ? i predict false");
// console.log(rain = false);
// console.log("is jeep != toyato ? i predict false");
// console.log(jeep !== "toyayto");
// console.log("is age1 >20 ? i predict false");
// console.log(age1>20);
//24
let fruits1 = ["apple],'grapes"];
let num = 10;
let num2 = 4;
let driving = false;
// console.log("is fruits.length = 2 ? i predict true");
// console.log(fruits.length == 2);
// console.log('is num = 11 ? i predict false');
// console.log(num == 11);
//25
var alliencolour:string= "green"
if(alliencolour=="green"){
    //console.log("player just earned 5 points");
}
else{

}
//26
var alliencolour1:string = "green";
if(alliencolour1=="green"){
    //console.log("player just earned 5 points");
}
else{
    //console.log("playes just earned 10 points");
    
}
var alliencolour2:string = "red";
if(alliencolour2=="green"){
    //console.log("player just earned 5 points");
}
else{
    //console.log("player just earned 10 points");
    
}
//27
var alliencolour3:string = "green";
if(alliencolour3=="green"){
    // console.log("player just earned 5 points");
}
var alliencolour4:string = "red";
if(alliencolour4=="red"){
    // console.log("player earned 15 points");
}
var alliencolour5:string= "yellow";
if(alliencolour5=="yellow"){
    // console.log("player just earned 10 points");
} 
//28
var age:number  = 20;
if(age<2){
    console.log("baby");
}
else if(age==2&&age<4){
    console.log("toddler");
}
else if(age==4&&age<13){
    console.log("kid");
}
else if(age==13&&age<20){
    console.log("teenager");
}
else if(age==20&&age<65){
    //console.log("adult");
}
else{
    console.log("older");
}
//29
var fruits:string[] = ["Apple","Mango","Banana"];
if(fruits[0]=="Apple"){
   // console.log("you really like Apple!");
}
 if(fruits[1]=="grapes"){
   // console.log("yu like grapes!");
}
 if(fruits[1]=="Mango"){
   // console.log("you like Mango!");
}
 if(fruits[2]=="Banana"){
   // console.log("you like banana!");
}
 if(fruits[0]=="pineapple"){
    console.log("yiu like pineapple!");
}
//30
var userNames:string[] = ["Admin","Sarab","Saqib","wasif","taqi"];
if(userNames[0]=="Admin"){
    console.log("Hello Admin would you like to see a status report?") 
}
else{
    console.log("hello"); 
}
//31
var users :string[] = ["sarab","cheema",'rock',"herry"];
if(users.length==0){
    console.log("we need some users");
}
else{
    //console.log("we not need users");
}
for(let i=users.length-1;i>=0;i--){ 
    users.pop()
    if(users.length==0){
    //    console.log("we need some users");
    // }
    // else{
    //     console.log("we not need users");
        
    }
}
 //32
 var currentusers:string[] = ["sarab",'wasif',"cheema","saqib"];
 var newusers:string[] = ["taqi","farz","sarab","umer"];
for(let i=0;i<currentusers.length;i++){
  if(newusers.includes(currentusers[i])){
//console.log(`${currentusers[i]} is not accepted`);
  }
  else{
      //console.log(`${currentusers[i]} is accepted`);
  }
 }
 //33
var sepnumbers:number[] = [1,2,3,4,5,6,7,8,9,]
for(let i=0;i<sepnumbers.length;i++){
 let add;
 if(sepnumbers[i]==1){
     add = "st";
 }
 else if(sepnumbers[i]==2){
     add = 'nd';
 }
 else if(sepnumbers[i]==3){
     add = 'rd';
 }
 else if(sepnumbers[i]==4){
     add = 'th';
 }
 else if(sepnumbers[i]==5){
     add = 'th';
 }
 else if(sepnumbers[i]==6){
     add = 'th';
 }
 else if(sepnumbers[i]==7){
     add = 'th';
 }
 else if(sepnumbers[i]==8){
     add = 'th';
 }
 else if(sepnumbers[i]==9){
     add ="th";
 }
// console.log(`${sepnumbers[i]}${add}`);
}
//34
var pizzas:string[] = ["kabab","onion",'vegetarian'];
for(let i=0;i<pizzas.length;i++){
   // console.log(`i like ${pizzas[i]} pizza`);
}
// console.log('pizza is small meal');
// console.log('pizza provide different taste with diffreren flavours');
// console.log('i really like pizza!');
//35
var animals:string[] = ["dog",'cat','horse',"cow"];
//to print the animals name in list
for(let i=0;i<animals.length;i++){
   // console.log(animals[i]);
}
console.log('statement about each animal');
for(let i=0;i<animals.length;i++){
    switch (animals[i]){
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
//36
function make_tshirts(size:number,textmsg:string){
    // console.log(`size of shirt is ${size}`);
    // console.log(`Message on tshirt is ${textmsg}`);
}
make_tshirts(35,"hey buddy light weight");
//37
function shirts(size:number,size2:number,logo:string){
// console.log(`large shirt and its size is ${size} logo is ${logo}`);
// console.log(`medium shirt size is ${size2} logo is ${logo}`);
}
shirts(42,39,"i love typescripit");
//38
function described_cities(city:string,country:string,city2:string,country2:string,city3:string,country3:string){
    // console.log(`${city} is in ${country}`);
    // console.log(`${city2} is in ${country2}`);
    // console.log(`${city3} is in ${country3}`);
}
described_cities("karachi","pakistan","Delhi","india","london","England")
//39
function citycountry(city:string,country:string){
    return `"${city}", "${country}"`
}
const city1 = citycountry("lahore","pakistan");
const city2 = citycountry("Newyork", "america");
const city3 = citycountry("kanpur", 'india');
// console.log(city1);
// console.log(city2);
// console.log(city3);


//41
var magician:string[] = ["joker",'buddy',"heri"];
function magician_names(){
    for(let i=0;i<magician.length;i++){
console.log(magician[i]);
    }
}
magician_names();
//42
function great_magician(tag:string){
    for(let i=0;i<magician.length;i++){
        console.log(`${magician[i]} is a ${tag}`);
    }
}
great_magician("great magician");
//43
function make_great(originalmagicians:string[]){
    let greatmagician: string[] = [];
    for(let i=0;i<originalmagicians.length;i++){
var magician = originalmagicians[i] + "the great";
greatmagician.push(magician);

    }
    return greatmagician;
}
function showMagicians(magicianNames: string[]) {
    for (let l=0;l<magicianNames.length;l++) {
        console.log(magicianNames[l])
    }
}
var names:string[] = ['herry',"joker","jack","jinbaba"];

const greatmagician:string[] = make_great([...names]);
console.log("original");
showMagicians(names);
console.log("with the great");
showMagicians(greatmagician);
//44
function make_sandwich(items:string[]){
    console.log("your are sandwich ready with following items");
    for(let i=0;i<items.length;i++){
        // console.log(`-${items}`);
    }
}
make_sandwich(['bread',"cheese","chicken"]);
make_sandwich(['kethcup',"eggs"]);
make_sandwich(["extra cheese","potates"]);

