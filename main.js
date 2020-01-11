//equal to operator(==) compares the only value not the data types
let num1=10;
let num2=20;
if(num1 == num2)
    console.log("Both values are the same");
else
    console.log("Both values are not equal"); // o/p

//strict equal to operator(===) compares both values & data types   
let str="10";
if(num1 === str)    
    console.log("Both are Same");
else
    console.log("Both are not Same"); // o/p

//Ternary operator(?:) work as if-else
let msg=undefined;
msg=(num1==str)?"true":"false";
console.log(msg); // true

// less than operator(<)
msg=(num1 < num2)?"true":"false";
console.log(msg); // true

// greater than operator(>)
msg=(num1 > num2)?"true":"false";
console.log(msg); // false

// less than eual to operator(<=) including this value
msg=(num1 <= num2)?"true":"false";
console.log(msg); // true

let FirstName="madhu";
let LastName="patil";

//not equal to operator (!=)
msg=(FirstName!=LastName)?"true":"false";
console.log(msg); // true

//And operator (&&)
if(FirstName=="madhu" && LastName=="patil") //true
    console.log("true");
else
    console.log("false");

//OR operator (||)
if(FirstName=="madhu" || LastName=="sankpal") //true
console.log("true");
else
console.log("false");

