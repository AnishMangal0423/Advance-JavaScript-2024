f1();
// f2();    // Giving error becuase f2 function undefined hoga kyuki variables execution context mai phle undefined hote h. aur undefined ko call krna is error.
// f3();    // giving error
console.log(x);
// console.log(y);   // Reference error denge kyuki Memory mai y h hi nhi.


var x = 2;

function f1(){
    console.log("I am in f1");
}

var f2 = function(){
    console.log(" I am in f2 variable assigned function ");
}

var f3 = () =>{
    console.log(" I am in Anonmouys fn f3")
}


f3();  // this will work

/****
 * 
 * Execution Context Draw karke dekho saab samaj aa jayega.
 * 
*/