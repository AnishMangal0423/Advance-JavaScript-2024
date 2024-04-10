/***
 * Index (About) -
 *  
 * 1. Function statement or Declaration
 * 2. Function Expression and Anonmouys Behaviour.
 * 3. First Class function.
 * 4. Arrow function.
 * 
 * 
 */




// Function Statement or Function Declaration -
// Used when we have concrete function , jab khai as a argument pass nhi krna hoo only call krna hoo.
function f1(){
    console.log("I am a Function Statement f1 ?: ")
}


// Function Expression -
// when we have to pass as an arguments.
var fn2 = function (){
    console.log("I am in Anonymous Function expression")
}

var fn22 = function f2(param1){
    console.log("I am in Named function expression ")
    console.log(f2);
    console.log(param1)
}


f1();
fn2();
fn22("xxxxx");
// f2();    Giving Error becuase we now cannot call f2() we have to use fn22(); only.
// console.log(f2)  Giving error f2 does not have scope outside.


//-----------------------------------------------------------------------------------------------------------------------------
//  First Class Functions -
/***
 * 
 * First class function , function ki wo ability h jiski wjah se hmm function ko argument and paramter ki form mai send and recieve kr sakte h.
 * using functions expressions.
 * 
 * Examples -
 */


// Recieving and sending the fns so a First class fn ability.
var fc1 = function f1(param1){
       console.log("Inside the First class function")
       console.log(param1);

       return function(){
          console.log(" I am returning fn ");
          return 0;
       }
}

function xyz(){

}


console.log(fc1(xyz)());



