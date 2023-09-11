//ARROW FUNCTİON:fonksiyon yazmayı kısaltır.

// const merhaba=function(){

//     console.log("merhaba");
// }
// merhaba();

//arrow function'la yazımı:
//parametresiz:
// const merhaba=()=>{
//     console.log("merhaba");
// }
// merhaba();


//parametreli:
const merhaba=(firstName,lastName)=>{
    console.log("merhaba",firstName,lastName);
}
merhaba("medine","yavuz");

//tek parametre alırsa
/*
const merhaba=firstname=>console.log("merhaba",firstName);
merhaba("medine");



*/

const cube=function(x){
    returnx*x*x;
}
console.log(cube(4));

//arrow function:

const cube2 = x =>{return x*x*x} ;
console.log(cube2(4));



