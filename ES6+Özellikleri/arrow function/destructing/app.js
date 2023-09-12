//destructing: array ve obje içinden değer almamızı sağlayan kısa yol
 

//ESKİ YÖNTEM:

let number1,number2;

arr=[100,200,300,400];

// number1=arr[0];
// number2=arr[1];



//DESTRUCTİNG:
[number1,number2]=arr;
console.log(number1,number2);

//obje destructing:
const numbers={
    a:10,
    b:20,
    c:30,
    d:40,
    e:50
}

const {a,c,e}=numbers;
console.log(a,c,e);

//function destructing:

const getLangs=()=> ["pyhton","java"];

const [lang1,lang2]=getLangs();

