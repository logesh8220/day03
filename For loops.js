//forloop

let fruits = ["mango","orange","graps","watermelon","papaya"];
for(i=0;i<fruits.length;i++){
    console.log(fruits[i])
}
//JSON 
 let fruitsJ = JSON.stringify(fruits);
 console.log(fruitsJ);

//for in loop

let dailyRoutine = ["Wake up","Eat","Code","Sleep","Repeat"]
 for(let key in dailyRoutine){
    console.log(dailyRoutine[key])
 } 

 //JSON
 let dailyRoutineJS = JSON.stringify(dailyRoutine);
 console.log(dailyRoutineJS);

//for of loop

 let info = [{
    Name : "logan",
    Age  : 20,
    Email:"loganop007@gmail.com",
    PhoneNo:8220739131,
}]
 for(let key of info){
   console.log(key)
 }
 let inpJSO = JSON.stringify(info);
   console.log(inpJSO)
let inpJSON = JSON.parse(inpJSO)
 console.log(inpJSON)

 //forEach loop 
 
 let forE = ["Wake up","Eat","Code","Sleep","Repeat"];
forE.forEach(function(day){
    console.log(day)
//JSON
})
let forJason = JSON.stringify(forE);
console.log(forJason)