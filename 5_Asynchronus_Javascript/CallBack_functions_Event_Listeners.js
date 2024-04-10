/***
 * 
 * 
 * 
 * 
 */

// Normal Callback functions + Event Listeners and demo example  showing like async behaviour -------------------------------------------------------------------------------
setTimeout(function(){ console.log("timer")}, 3000);

function f1(param1){
     console.log("I am f1 function ")
     param1();
    }

function callback(){
    console.log("I am callback fn ")
}
f1(callback)


// Closure and call back function demo ------------------------------------------------------------------------------------------

function attachEventListner(){
let count = 0;
for(var i=0; i<100; i++){
    setTimeout(function(){ console.log("timer "+ (++count))}, 3000);
}
}

attachEventListner();  // Ye krne se closure bn gya count variable aab har koi change nhi kr sakta count variable ko , only attachEventListner ke ander ke fns hi change kr skate h , closure bna rkha h osne.

