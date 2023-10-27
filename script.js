//1. How to compare two JSON have the same properties without order?
console.log("=> Answer: 1"); 
console.log(" "); 
let obj1 = {name: "Person 1", age:5};
let obj2 = {age:5, name: "Person 1"};
let compare = JSON.stringify(obj1)
console.log(compare);
console.log(obj2);

console.log(" ");

console.log("=> Answer: 2");
console.log(" ");
// 2) question
let getFlafs = new XMLHttpRequest();
getFlafs.open("GET", "https://restcountries.com/v3.1/all",true)
getFlafs.send();
getFlafs.onload = function (){
    let data = getFlafs.response;
    let dataConvert = JSON.parse(data);
    
    for(i=0; i< dataConvert.length;i++){
        console.log(dataConvert[i].flags.png);
    };
    console.log("=> Answer 3")
};
// console.log("Answer 2")
// 3) question
let request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all",true)
request.send();
request.onload = function (){
    let data = request.response;
    let result = JSON.parse(data);
    
    for(i=0; i< result.length;i++){
        let names = result[i].name.common
        let region = result[i].region
        let subRegion = result[i].subregion
        let population = result[i].population
        console.log(`   ${names}, ${region}, ${subRegion}, ${population}`)
    }
}