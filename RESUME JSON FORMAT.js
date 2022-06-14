var person ={
    name : "Logesh T",
    age  : 20,
    email:"logeshthirumurugan@gmail.com",
    PhoneNo: 8220739131,
    Education :" B.B.A in Bachelor Of Business Administration",
    Language : "Tamil & English",
    Address : {
          Area : "Tindivanam",
          Street : "Perumal Koil Street",
          doorNo : "1/47",
    },
    Skills : "Very Good Computer Skill Windows ",
}
let personJSON  = JSON.stringify(person);
console.log(personJSON)
let personpas = JSON.parse(personJSON)
console.log(personpas)